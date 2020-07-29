import React from 'react'
import Style from "./style";
import Input from '../../Atoms/InputField/inputField';
import Button from '../../Atoms/Button/Button';
import { useHistory } from "react-router-dom";
function Homescreen() {
    let history = useHistory();

    return (
        <>
            <div className="homepage">
                <h1>Hi There!<br></br>Welcome to your education showcase.</h1>
                <div className="section">
                    <h2>Enter Your Name To Begin</h2>
                    <Input />
                </div>
                <div onClick={() => history.push("./mainscreen")}><Button name="Let's Start" color="blue" /></div>
            </div>
            <Style />
        </>
    )
}
export default Homescreen;