import React from "react";
import {auth} from './config/firebase';
import {signOut} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

function TruckerPage () {

    const history = useNavigate();

    const handleClick = () => {
        signOut(auth).then(val => {
            history("/")
        })
    }

    return (
        <div>
            <button onClick={handleClick}>SIgn Out</button>
        </div>
    )
}

export default TruckerPage;