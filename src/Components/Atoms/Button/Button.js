import React from 'react'
import '../../../App.css';
import Style from "./style";
function Button(props) {
    return (
        <>
            <button className={props.color}>{props.name}</button>
            <Style />
        </>
    )
}
export default Button;