import React from 'react';
import './style.css';

const Players = ({ playerName, color, playStatus }) => {

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('hole_id', target.id);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    // const onDragEnd = e => {
    //     if (e.dataTransfer.dropEffect) {
    //         setTerm(preState => !preState);
    //     }
    // }

    return (
        <div className={playStatus ? "activeBox" : "player_box"}>
            <h2 className="player_head">{playerName}</h2>
            {playStatus && <div className="term"></div>}
            <div
                id={color}
                className="color_box"
                draggable={playStatus}
                onDragStart={dragStart}
                // onDragEnd={onDragEnd}
                onDragOver={dragOver}
                style={{ backgroundColor: color }}>
            </div>
        </div>
    )
}

export default Players;