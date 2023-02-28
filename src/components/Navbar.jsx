import React from "react";
// import SearchBar from "./SearchBar";
function Navbar() {
    // const [center, setcenter] = useState(false);

    // const zoom = () => {
    //     setcenter(!center)

    // }
    return (
        <>

            <div className="Navbar">
                <img className="navglobal" src="images/Group 545.png" alt="" />
                <img className="nav54" src="images/Rectangle 54.png" alt="" />
                <img className="navk" src="images/K.png" alt="" />
                <img className="navBuy" src="images/Buy.png" alt="" />
                <form id="form" className="navSearch" /*onClick={zoom}*/>
                    <img className="searchimg" src="/images/Search.png" alt="img" />
                    <p className="navtxtsar">Search</p>
                </form>
                {/* {center ? <SearchBar /> : ""} */}
                <p className="navAbt">About us</p>
                <p className="navRes">Resources</p>
                <p className="navWeb">Webstore</p>
                <p className="navSol">Solutions</p>
                <p className="navCons">Consulting</p>
                <p className="navTrain">Training</p>
            </div >
        </>
    );
}

export default Navbar;