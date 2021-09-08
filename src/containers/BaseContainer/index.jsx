import React from 'react';
import PropTypes from 'prop-types';
import generateMatrix from './helper';
import Players from '../../components/Players';
import './style.css';

const BaseContainer = ({ numX, numY, player1, player2 }) => {
    return (
        <section className="section">
            <Players playerName={player1 || "Player 1"} color="yellow" />
            <div className="baseContainer">
                <div className="grid_box">
                    <table cellspacing="5">
                        {generateMatrix(numX, numY)}
                    </table>
                </div>
            </div>
            <Players playerName={player2 || "Player 2"} color="red" />
        </section>
    )
}

BaseContainer.propTypes = {
    numX: PropTypes.number,
    numY: PropTypes.number,
};

BaseContainer.defaultProps = {
    numX: 5,
    numY: 6,
};

export default BaseContainer;