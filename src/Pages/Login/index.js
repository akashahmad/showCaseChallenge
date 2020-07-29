import React from 'react'
import Navbar from '../../Components/Atoms/navbar/navbar';
import Style from "./style";
import HomeMolecule from '../../Components/Molecules/HomeScreen/homescreen';
import { connect } from "react-redux";
import { setName } from "../../store/actions/login";

const Home = (props) => {
    let { setUserName } = props
    return (
        <><div>
            <Navbar />
            <div className="home-container">
                <div className="main-content">
                    <HomeMolecule setUserName={setUserName} />
                </div>
            </div>
        </div>
            <Style />
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) =>
            dispatch(setName(name))
    };
};
const mapStateToProps = (state) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);