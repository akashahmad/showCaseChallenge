import React from 'react';
import Style from "./style";

function card(props) {
    let { education } = props
    console.log()
    return (
        <>
            <div className="card-container">
                <h1>{education && education.university ? education.university : ""}</h1>
                <div className="textin">
                    <p>{education && education.degree ? education.degree : ""}-{education && education.field ? education.field : ""}</p>
                    <p><span>{education && education.startDate ? education.startDate : ""}-</span><span>{education && education.endDate ? education.endDate : ""}</span></p>

                </div>
                {education && education.grade ? <h2><span>Grade:</span><span className="fonts">{education && education.grade ? education.grade : ""}</span></h2> : ""}
                {education && education.description && <h2 className="description">Description</h2>}
                <p className="lighter">{education && education.description ? education.description : ""}</p>
            </div>
            <Style />
        </>
    )
}
export default card;