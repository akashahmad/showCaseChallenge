import React from 'react';
import Style from "./style";

function card(props) {
    let { education } = props
    console.log()
    return (
        <>
            <div className="card-container">
                <h1>Showcase University</h1>
                <div className="textin">
                    <p>{education && education.university ? education.university : ""}</p>
                </div>
                <h2>{education && education.grade ? education.grade : ""}</h2>
                {education && education.description && <h2 className="description">Description</h2>}
                <p className="lighter">{education && education.description ? education.description : ""}</p>
            </div>
            <Style />
        </>
    )
}
export default card;