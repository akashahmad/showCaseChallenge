import React from 'react'
import Card from '../../Molecules/TextCard/card';
import Style from "./style";
function maincards() {
    return (
        <>
            <div className="cards-container">
                <div className="card"><Card /></div>
                <div><Card /></div>
            </div>
            <Style />
        </>
    )
}
export default maincards;