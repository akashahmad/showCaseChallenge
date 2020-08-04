import React from 'react'
import Button from '../../Atoms/Button/Button';
import Style from "./style";
function bookmarkmenu(props) {
    let { educations } = props

    return educations && educations.length !== 0 && (

        <>
           {educations&&educations.length!==0? <div className="book-mark-menu">
                <h1>Bookmark Menu</h1>
                
                <div className="book-marks">
                    {educations.map((education, index) => <Button key={index} name={education.university} color="white" />)}
                </div>

            </div>:""}
            <Style />
        </>
    )
}
export default bookmarkmenu;