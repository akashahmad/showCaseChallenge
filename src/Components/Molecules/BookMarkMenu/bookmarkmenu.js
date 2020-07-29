import React from 'react'
import Button from '../../Atoms/Button/Button';
import Style from "./style";
function bookmarkmenu() {
    return (
        <>
            <div className="book-mark-menu">
                <h1>Bookmark Menu</h1>
                <Button name="Showcase University" color="blue" />
                <Button name="Forward Bootcamp" color="white" />
                <Button name="Title 1" color="white" />
                <Button name="Title 2" color="white" />
                <Button name="Title 3" color="white" />
            </div>
            <Style />
        </>
    )
}
export default bookmarkmenu;