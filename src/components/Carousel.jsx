import React from "react";
import MyCard from "./MyCard";
import contacts from "../contacts";

function createCard(contact) {
    return (
        <MyCard
            key={contact.id}
            img={contact.imgURL}
            det1={contact.detail1}
            det2={contact.detail2}
            det3={contact.details3}
        />
    );
}

function Carousel() {

    let box = document.querySelector(".product-container");
    console.log(box);
    const prevBtn = () => {
        let width = window.screen.width;
        box.scrollLeft = box.scrollLeft - width;
    }
    const nextBtnPress = () => {
        let width = window.screen.width;;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className="product-carousel">
            <h1 className="carh1">Latest News</h1>
            <button className="pre-btn" onClick={prevBtn}>
                <p>&lt;</p>
            </button>
            <button className="next-btn" onClick={nextBtnPress}>
                <p>&gt;</p>
            </button>
            <div className="product-container">
                {contacts.map(createCard)}
            </div>
            <button className="carbtn2">View more</button>
        </div >

    );
}

export default Carousel;    