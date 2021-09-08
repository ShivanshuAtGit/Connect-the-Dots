import React from 'react';
import PropTypes from 'prop-types';
import generateMatrix from './helper';
import './style.css';

const BaseContainer = ({ numX, numY }) => {
    return (
        <div className="baseContainer">
            <div className="grid_box">
                <table cellspacing="5">
                    {generateMatrix(numX, numY)}
                </table>
            </div>
        </div>
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