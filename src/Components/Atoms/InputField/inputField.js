import React from 'react';
import '../../../App.css';
import Style from "./style";
const InputField=(props) =>{
    let {setUserName}=props
    return (
        <>
        <input type="text" placeholder="" onChange={(event)=>{setUserName(event.target.value)}}></input>
        <Style/>
        </>
    )
}
export default InputField;