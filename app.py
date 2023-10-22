from flask import Flask, request, jsonify
import cv2
import numpy as np
from tensorflow.lite.python.interpreter import Interpreter
from py3dbp import Packer, Bin, Item
import plotly.graph_objects as go


app = Flask(__name__)


packer = Packer()

def tflite_detect_image(modelpath, imgpath, lblpath, min_conf=0.5):
    with open(lblpath, 'r') as f:
        labels = [line.strip() for line in f.readlines()]
    interpreter = Interpreter(model_path=modelpath)
    interpreter.allocate_tensors()
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    height = input_details[0]['shape'][1]
    width = input_details[0]['shape'][2]
    float_input = (input_details[0]['dtype'] == np.float32)
    input_mean = 127.5
    input_std = 127.5
    image = cv2.imread(imgpath)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    imH, imW, _ = image.shape
    image_resized = cv2.resize(image_rgb, (width, height))
    input_data = np.expand_dims(image_resized, axis=0)
    if float_input:
        input_data = (np.float32(input_data) - input_mean) / input_std
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()
    boxes = interpreter.get_tensor(output_details[1]['index'])[0]
    classes = interpreter.get_tensor(output_details[3]['index'])[0]
    scores = interpreter.get_tensor(output_details[0]['index'])[0]
    max_index = np.argmax(scores)
    if scores[max_index] > min_conf:
        ymin, xmin, ymax, xmax = boxes[max_index]
        ymin = int(max(1, (ymin * imH)))
        xmin = int(max(1, (xmin * imW)))
        ymax = int(min(imH, (ymax * imH)))
        xmax = int(min(imW, (xmax * imW)))
        box_width = xmax - xmin
        box_height = ymax - ymin
        cv2.rectangle(image, (xmin, ymin), (xmax, ymax), (10, 255, 0), 2)
        label = '%s: %d%%' % (labels[int(classes[max_index])], int(scores[max_index]*100))
        cv2.putText(image, label, (xmin, ymin-7), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
        plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        plt.show()
        return box_width, box_height
    else:
        print("No detection above the confidence threshold.")
        return None, None

def initialize_packer():
    global packer
    packer = Packer()
    packer.add_bin(Bin('Truck', truck_length, truck_width, truck_height, 0))
    packer.add_item(Item('BlueBox1', 80, 50, 60, 0))
    packer.add_item(Item('BlueBox2', 70, 110, 10, 0))
    packer.pack()

def get_item_from_dimensions(box_width, box_height):
    if box_width == 342 and box_height == 413:
        return Item('YellowBox', 30, 22, 8, 0)
    else:
        return Item('YellowBox', 18, 14, 3, 0)

def plotly_3d_box(container_dim, items):
    fig = go.Figure()
    item_colors = {
        'YellowBox': 'yellow',
        'BlueBox1': 'blue',
        'BlueBox2': 'blue'
    }
    def add_box(x, y, z, dx, dy, dz, color, name):
        fig.add_trace(go.Mesh3d(
            x=[x, x, x+dx, x+dx, x, x, x+dx, x+dx],
            y=[y, y+dy, y+dy, y, y, y+dy, y+dy, y],
            z=[z, z, z, z, z+dz, z+dz, z+dz, z+dz],
            i=[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
            j=[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
            k=[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
            color=color,
            name=name
        ))
    for item in items:
        x, y, z = item.position
        dx, dy, dz = item.width, item.height, item.depth
        color = item_colors.get(item.name, 'blue')
        add_box(x, y, z, dx, dy, dz, color, item.name)
    fig.show()

truck_length = 48 * 12
truck_width = 8.5 * 12
truck_height = 13.5 * 12

def process_image(img_path):
    # Convert all YellowBoxes to BlueBoxes
    for item in packer.items:
        if item.name == 'YellowBox':
            item.name = 'BlueBox'

    # Detect object and print its dimensions
    box_width, box_height = tflite_detect_image(PATH_TO_MODEL, img_path, PATH_TO_LABELS, min_conf_threshold)

    # Add the detected object as a yellow box to the packer and repack
    item_to_add = get_item_from_dimensions(box_width, box_height)
    packer.add_item(item_to_add)
    packer.pack()

    # Visualize packed boxes
    plotly_3d_box((truck_length, truck_width, truck_height), packer.bins[0].items)

# Initial loading of blue boxes
initialize_packer()
plotly_3d_box((truck_length, truck_width, truck_height), packer.bins[0].items)

PATH_TO_MODEL = '/content/detect.tflite'
PATH_TO_LABELS = '/content/labelmap.txt'
min_conf_threshold = 0.5

truck_length = 48 * 12
truck_width = 8.5 * 12
truck_height = 13.5 * 12


PATH_TO_MODEL = '/path/to/detect.tflite'
PATH_TO_LABELS = '/path/to/labelmap.txt'
min_conf_threshold = 0.5


initialize_packer()


@app.route('/process_image', methods=['POST'])
def process_api_image():
    img_path = request.form['img_path']


    # Convert all YellowBoxes to BlueBoxes
    for item in packer.items:
        if item.name == 'YellowBox':
            item.name = 'BlueBox'


    # Detect object and print its dimensions
    box_width, box_height = tflite_detect_image(PATH_TO_MODEL, img_path, PATH_TO_LABELS, min_conf_threshold)


    # Add the detected object as a yellow box to the packer and repack
    item_to_add = get_item_from_dimensions(box_width, box_height)
    packer.add_item(item_to_add)
    packer.pack()


    # You may need to convert the visualization result into a format that can be returned to React
    # For now, I'm just returning the detected dimensions
    result = {
        "box_width": box_width,
        "box_height": box_height
    }
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)





