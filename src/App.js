import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomeHero from './components/HomeHero';
import Navbar from './components/navbar';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';
import TruckerPage from './truckerPage';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/truckUser' element={<TruckerPage/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
