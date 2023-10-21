import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomeHero from './components/HomeHero';
import Navbar from './components/navbar';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';

function App() {
  return (
    <>
    <Router>
      <div>
        {/* Your components and routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
