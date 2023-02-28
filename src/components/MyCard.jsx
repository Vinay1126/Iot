import React from "react";
// import Avatar from "./Avatar";
// import Detail from "./Detail";

function MyCard(props) {
    return (
        <div className="mycard">
            <div className="top">
                <img className="avt-img" src={props.img} alt="avatar_img" />
            </div>
            <div >
                <p className="cartxt1">{props.det1}</p>
                <p className="cartxt2">{props.det2}</p>
                <button className="carbtn"><p className="cartxt3">{props.det3}</p></button>
            </div>
        </div>
    );
}

export default MyCard;