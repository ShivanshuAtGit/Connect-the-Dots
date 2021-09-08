import React from 'react';
import './style.css';

const Players = ({ playerName, color }) => {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('hole_id', target.id);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div className="player_box">
            <h2 className="player_head">{playerName}</h2>
            <div
                id={color}
                className="color_box"
                draggable="true"
                onDragStart={dragStart}
                onDragOver={dragOver} style={{ backgroundColor: color }}></div>
        </div>
    )
}

export default Players;