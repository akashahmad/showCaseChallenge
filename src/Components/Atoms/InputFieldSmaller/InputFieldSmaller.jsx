import React from 'react';
import '../../../App.css';
import Style from "./style";

function InputFieldSmaller(props) {
    return (
        <>
        <input type="text" placeholder={props.name} ></input>
        <Style/>
        </>
    )
}
export default InputFieldSmaller;