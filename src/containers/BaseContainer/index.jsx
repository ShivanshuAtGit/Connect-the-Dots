import React from 'react';
import PropTypes from 'prop-types';
import Players from '../../components/Players';
import Modal from '../../components/Modal';
import Holes from '../../components/Holes';
import { findDiagonalStatus, findHorizontalStatus, findVerticalStatus, holeData, resetObj } from './helper';
import './style.css';

let dataObj = {};

const BaseContainer = ({ numX, numY, player1, player2 }) => {

    const initialData = {
        status: false,
        winner: null,
        highLightDots: [],
    }

    const [modal, setModal] = React.useState(false);
    const [values, setValues] = React.useState(initialData);

    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);
    };

    React.useEffect(() => {
        // console.log(dataObj?.[5]?.color);
        if (dataObj !== {})
            resetObj(dataObj, numX, numY);
    }, [values]);

    const checkStatus = () => {
        const { verticalStatus, verWinner, verIds } = findVerticalStatus(dataObj, numX, numY);
        const { horizontalStatus, horWinner, horIds } = findHorizontalStatus(dataObj, numX, numY);
        const { diagonalStatus, diaWinner, diaIds } = findDiagonalStatus(dataObj, numX, numY);

        console.log("horizonal: ", horizontalStatus, "horwinner", horWinner);

        if (verticalStatus) {
            setValues({
                status: true,
                winner: verWinner,
                highLightDots: verIds,
            })
        } else if (horizontalStatus) {
            setValues({
                status: true,
                winner: horWinner,
                highLightDots: horIds,
            })
        } else if (diagonalStatus) {
            setValues({
                status: true,
                winner: diaWinner,
                highLightDots: diaIds,
            })
        }

    }

    const handleDropEvent = (id, color) => {
        let recent = id;
        const arr = id.split('-');
        const row = parseInt(arr[0]);
        const cell = parseInt(arr[1]);

        for (let i = row; i < numX; i++) {
            const testId = `${i}-${cell}`;
            if (dataObj[testId].color === 'blank') {
                recent = testId;
            }
        }
        document.getElementById(recent).style.backgroundColor = color;
        dataObj[recent].setColor(color);
        checkStatus();
    }

    const generateRow = (cells, row) => {
        const cell = [];
        for (let i = 0; i < cells; i++) {
            const id = `${row}-${i}`;
            cell.push(<td><Holes id={id} handleDropEvent={handleDropEvent} /></td>);
            dataObj = { ...dataObj, [id]: new holeData(row, i, 'blank') }
        }
        return (
            <tr>
                {cell.map((col) => (col))}
            </tr>
        )
    }

    const generateMatrix = (rows, cell) => {
        const row = [];
        for (let i = 0; i < rows; i++) {
            row.push(generateRow(cell, i))
        }
        return row;
    }


    return (
        <section className="section">
            <Players playerName={player1 || "Player 1"} color="yellow" />
            {modal ? (
                <Modal show={modal} handleClose={hideModal}>Hello </Modal>
            ) : (
                <>
                    <div className="baseContainer">
                        <div className="grid_box">
                            <table cellspacing="5">
                                {generateMatrix(numX, numY)}
                            </table>
                        </div>
                    </div>
                    <Players playerName={player2 || "Player 2"} color="red" />
                </>
            )}
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