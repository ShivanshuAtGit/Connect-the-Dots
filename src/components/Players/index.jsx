import React from 'react';
import './style.css';

const Players = ({ playerName, color }) => {
    return (
        <div className="player_box">
            <h2 className="player_head">{playerName}</h2>
            <div className="color_box" style={{backgroundColor: color}}></div>
        </div>
    )
}

export default Players;