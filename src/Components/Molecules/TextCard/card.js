import React from 'react';
import Style from "./style";

function card(props) {
    return (
        <>
            <div className="card-container">
                <h1>Showcase University</h1>
                <div className="textin">
                    <p>Master - Business Administration</p>
                    <p>February 2018 - December 2020</p>
                </div>
                <h2>Grade: A</h2>
                <h2 className="description">Description</h2>
                <p className="lighter">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minima eius beatae voluptate dolores quos soluta. Illum ea cumque delectus,
                voluptatibus optio, veritatis eos expedita sed repudiandae nesciunt minima?
                Cumque, dignissimos hic porro itaque quam vero quaerat qui veritatis culpa
                fugiat esse voluptatem. Asperiores debitis nisi enim! Amet nisi exercitationem
                 qui voluptates doloremque eaque! Laboriosam, quibusdam id dolorem dolorum harum earum?</p>
            </div>
            <Style />
        </>
    )
}
export default card;