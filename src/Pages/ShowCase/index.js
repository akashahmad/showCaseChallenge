import React, { useState } from 'react'
import Navbar from '../../Components/Atoms/navbar/navbar';
import Cards from '../../Components/Organisms/MainCards/maincards';
import Bookmark from '../../Components/Molecules/BookMarkMenu/bookmarkmenu';
import Button from '../../Components/Atoms/Button/Button';
import Modal from 'react-modal';
import { connect } from "react-redux";
import { setEducations, searchUniversities } from "../../store/actions/showCaseActions";
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

const Mainscreen = (props) => {
    let { userName, setEducationsInStore, educations, searchUniversitiesCall, universities } = props;
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [education, setEducation] = useState({})
    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const submit = (e) => {
        e.preventDefault()
        setIsOpen(false);
        let duplicateEducations = [...educations]
        duplicateEducations.push(education)
        setEducationsInStore([...duplicateEducations])
        setEducation({})
    }
    const changeValue = (type, value) => {
        let duplicateEducation = { ...education }
        duplicateEducation[type] = value
        setEducation({ ...duplicateEducation })
    }
    console.log(educations)
    return (
        <>
            <div>
                <Navbar />
                <Bookmark educations={educations} />
                <div className="container">
                    <h1>Welcome to {userName} education page.</h1>
                    <div onClick={openModal}><Button name="Add New Education" color="blue" /></div>
                </div>
                <Cards educations={educations} />
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Add Education Modal">
                        <span className="close" onClick={closeModal}>x</span>
                        <h2 className="header-modal">Add New Education Modal</h2>
                        <div ref={_subtitle => (subtitle = _subtitle)}></div>
                        <form className="form" onSubmit={submit}>
                            <div className="row">
                                <div className="handle-search">
                                    <h1>University Name<span className="red">*</span></h1>
                                    <input type="text" placeholder="MIT" name="university" minLength="2" maxLength="50" value={education && education.university ? education.university : ""} required onChange={(e) => {
                                        changeValue("university", e.target.value)
                                        searchUniversitiesCall(e.target.value)
                                    }}></input>
                                    {universities && universities.length !==0 &&<ul className="list-style">
                                        {universities && universities.map((university, index) => <li onClick={() => {
                                            changeValue("university", university.name)
                                            searchUniversitiesCall("")
                                        }} key={index}>{university.name}</li>)}
                                    </ul>}
                                </div>
                                <div>
                                    <h1>Degree<span className="red">*</span></h1>
                                    <input type="text" placeholder="Masters" name="degree" minLength="2" maxLength="50" required onChange={(e) => {
                                        changeValue("degree", e.target.value)
                                    }}></input>
                                </div>
                                <div>
                                    <h1>Field Of Study</h1>
                                    <input type="text" placeholder="Business Administration" name="field" onChange={(e) => {
                                        changeValue("field", e.target.value)
                                    }}></input>
                                </div>
                            </div>
                            <div className="row">

                                <div>
                                    <h1>Grade</h1>
                                    <input type="text" placeholder="A" name="grade" onChange={(e) => {
                                        changeValue("grade", e.target.value)
                                    }}></input>
                                </div>
                                <div>
                                    <h1>Start Date</h1>
                                    <input type="text" placeholder="15 Febrary 2016" name="startDate" onChange={(e) => {
                                        changeValue("startDate", e.target.value)
                                    }}></input>
                                </div>
                                <div>
                                    <h1>End Date</h1>
                                    <input type="text" placeholder="15 Febrary 2016" name="endDate" onChange={(e) => {
                                        changeValue("endDate", e.target.value)
                                    }}></input>
                                </div>
                            </div>
                            <div className="rowbig">
                                <div>
                                    <h1>Description</h1>
                                    <textarea className="description" placeholder="" name="description" onChange={(e) => {
                                        changeValue("description", e.target.value)
                                    }} />

                                </div>
                            </div>
                            <div className="save" ><Button type="submit" name="Save" color="blue" /></div>
                        </form>
                    </Modal>
                </div>
            </div>
            <Style />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        userName: state.login.name,
        educations: state.showCase.educations,
        universities: state.showCase.universities
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setEducationsInStore: (educations) =>
            dispatch(setEducations(educations)),
        searchUniversitiesCall: (keyword) =>
            dispatch(searchUniversities(keyword)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Mainscreen);