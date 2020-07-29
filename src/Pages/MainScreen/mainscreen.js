import React, {useState} from 'react'
import Navbar from '../../Components/Atoms/navbar/navbar';
import Cards from '../../Components/Organisms/MainCards/maincards';
import Bookmark from '../../Components/Molecules/BookMarkMenu/bookmarkmenu';
import Button from '../../Components/Atoms/Button/Button';
import Modal from 'react-modal';
import InputField from '../../Components/Atoms/InputFieldSmaller/InputFieldSmaller';
import Style from "./style";
const customStyles = {
    content: {
        height: '600px',
        width: '1000px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function Mainscreen() {
    var subtitle;

const [modalIsOpen,
    setIsOpen] = React.useState(false);
function openModal() {
    setIsOpen(true);
}
function afterOpenModal() {

    subtitle.style.color = '#f00';
}
function closeModal() {
    setIsOpen(false);
}
 
    return (
        <>
        <div>
            <Navbar />
            <Bookmark />
            <div className="container">
                <h1>Welcome to John Doe education page.</h1>
                <div onClick={openModal}><Button name="Add New Education" color="blue"/></div>
            </div>
            <Cards />


            <div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Add Education Modal">
                <a className="close" onClick={closeModal}>x</a>
                <h2  className="header-modal">Add New Education Modal</h2>
                <div ref={_subtitle => (subtitle = _subtitle)}></div>
                <form className="form">
                    <div className="row">
                        <div>
                            <h1>University Name</h1>
                            <InputField name="MIT"/>
                        </div>
                        <div>
                            <h1>Degree</h1>
                            <InputField name="Masters" />
                        </div>
                        <div>
                            <h1>Field Of Study</h1>
                            <InputField name="Business Administration"/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h1>Start Date</h1>
                            <InputField name="February 2018"/>
                        </div>
                        <div>
                            <h1>End Date</h1>
                            <InputField name="December 2020" />
                        </div>
                        <div>
                            <h1>Grade</h1>
                            <InputField name="A"/>
                        </div>
                        
                    </div>
                    <div className="rowbig">
                        <div>
                            <h1>Description</h1>
                            <input className="description" placeholder="" ></input>
                        </div>
                    </div>
                    <div className="save" onClick={closeModal} ><Button name="Save" color="blue"/></div>
                </form>
            </Modal>
        </div>
        </div>
        <Style/>
        </>
    )
}
export default Mainscreen;