import React, { useState } from 'react';
import './model.css';
import Modal from 'react-modal';
import InputField from '../../Atoms/InputFieldSmaller/InputFieldSmaller';
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

function Modal1(props) {
    var subtitle;

    const [modalIsOpen,
        setIsOpen] = React.useState(true);
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
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Add Education Modal">
                <a className="close" onClick={closeModal} href="#">x</a>
                <h2 className="header-modal">Add New Education Modal</h2>
                <div ref={_subtitle => (subtitle = _subtitle)}></div>
                <form className="form">
                    <div className="row">
                        <div>
                            <h1>University Name</h1>
                            <InputField name="MIT" />
                        </div>
                        <div>
                            <h1>Degree</h1>
                            <InputField name="Masters" />
                        </div>
                        <div>
                            <h1>Field Of Study</h1>
                            <InputField name="Business Administration" />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h1>Start Date</h1>
                            <InputField name="February 2018" />
                        </div>
                        <div>
                            <h1>End Date</h1>
                            <InputField name="December 2020" />
                        </div>
                        <div>
                            <h1>Grade</h1>
                            <InputField name="A" />
                        </div>

                    </div>

                </form>
            </Modal>
        </div>
    )
}
export default Modal1;