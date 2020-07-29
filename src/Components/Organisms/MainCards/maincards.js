import React from 'react'
import Card from '../../Molecules/TextCard/card';
import Style from "./style";
const maincards = (props) => {
    let { educations } = props
    return (
        <>
            <div className="cards-container">
                {educations && educations.length !== 0 ?
                    educations.map((education, index) => <div key={index} className="card"><Card education={education}/></div>)

                    : <h1 className="card-container">No educations found.</h1>}
            </div>
            <Style />
        </>
    )
}
export default maincards;