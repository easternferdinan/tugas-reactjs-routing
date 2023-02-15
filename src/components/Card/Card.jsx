import React from "react";
import "./style/card.css";

export default function Card(props) {
    return (
        <div className="card-container">
            <img className="card-thumbnail" src={props.img} alt="Thumbnail" />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
                <small className="price">{props.price}</small>
            </div>
        </div>
    );
}
