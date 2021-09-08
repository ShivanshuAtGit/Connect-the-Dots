import React from 'react';
import './style.css';

const Holes = ({ id, handleDropEvent }) => {

    const drop = e => {
        e.preventDefault();
        const hole_id = e.dataTransfer.getData('hole_id');

        const color = document.getElementById(hole_id);
        const dragColor = window.getComputedStyle(color, null).getPropertyValue("background-color");

        handleDropEvent(e.target.id, dragColor)
        // e.target.style.backgroundColor = dragColor;
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={id}
            draggable="false"
            className="holes"
            onDrop={drop}
            onDragOver={dragOver}
        >
            {console.log(id)}
        </div>
    )
}

export default Holes;