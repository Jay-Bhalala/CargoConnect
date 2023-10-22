import React from "react";
import logo from '../img/logo.png'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="flex items-center justify-between relative">
        <header className="mx-auto items-center justify-center flex">
          <div className="items-center">
            <img src={logo} className="mx-auto rounded-full h-28" alt="Logo" />
          </div>
          <button className="bg-blue-400 text-white p-2 rounded-md cursor-pointer absolute right-5 text-xl">
            <Link to='/SignUp'>Sign up</Link>
          </button>
        </header>
      </div>
      
    )
}

export default Navbar;