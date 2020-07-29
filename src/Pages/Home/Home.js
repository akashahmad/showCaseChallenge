import React from 'react'
import Navbar from '../../Components/Atoms/navbar/navbar';
import Style from "./style";
import HomeMolecule from '../../Components/Molecules/HomeScreen/homescreen';
function Home() {
    return (
        <><div>
            <Navbar />
            <div className="home-container">
                <div className="main-content">
                    <HomeMolecule />
                </div>
            </div>
        </div>
            <Style />
        </>
    )
}
export default Home;