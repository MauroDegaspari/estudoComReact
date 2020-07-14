import './Card.css'
import React from 'react';

export default function Card(props) {
    return (
        <div className="corpo">
            <div className="tit">{props.titulo}</div>
            <div className="cont">{props.children}</div>
        </div>
    )
}