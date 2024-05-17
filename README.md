# What it does
CargoConnect serves as a groundbreaking platform where trucking companies list available cargo space, which users can easily discover and book. The platform goes a step further by utilizing machine learning to allow users to scan their packages and identify which empty cargo listings are the perfect fit for their needs. The cargo is also turned into a 3D scan and is put inside a virtual truck with the company's existing cargo, and our program sorts it inside the truck bed to give the trucking company the best possible layout to maximize leftover space. We've also incorporated blockchain technology to enhance security, and transparency, and promote eco-friendliness in the industry.

# How we built it
CargoConnect is built using React for the user interface, supported by a smart-contract-backed marketplace. Firebase handles authentication and backend operations. The platform's 3D visualization capabilities are powered by a combination of Python, OpenCV, TensorFlow Lite, and Plotly. We trained our custom model using TensorFlow Lite on various packages, and using OpenCV we scaled their dimensions to a virtual box. We then added this box to a virtual truck space composed of other boxes and resorted them using our own algorithm to try to maximize the space. This is all packaged into a Flask Server, which is fetched by our React App.

# Contributors: Hardik Singh, Jay Bhalala, Jeremy Chuah
Hardik Singh -> Worked on Object Detection, Plotly configuration, and integration with React app via Flask
Jay Bhalala -> Worked on React components and object detection
