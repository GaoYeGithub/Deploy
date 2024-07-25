import React from "react"

export default function Contact(props) {
    return (
        <div className="card">
            <img src={`src/images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="src/images/star.png" className="card--star" />
                <span className="gray">{props.name}</span>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.phone}</span>
                <span className="gray">{props.email}</span>
                <span className="gray">{props.title}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}