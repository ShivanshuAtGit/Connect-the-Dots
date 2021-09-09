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
        if (dataObj !== {}) {
            if (values.status) {
                showModal();
                showHighlight();
            }
        }
    }, [values]);

    const restartGame = () => {
        removeHighlight();
        resetObj(dataObj, numX, numY);
    }

    const showHighlight = () => {
        const circle1 = document.getElementById(values.highLightDots[0]);
        const circle2 = document.getElementById(values.highLightDots[1]);
        const circle3 = document.getElementById(values.highLightDots[2]);
        const circle4 = document.getElementById(values.highLightDots[3]);

        circle1.classList.add('border');
        circle2.classList.add('border');
        circle3.classList.add('border');
        circle4.classList.add('border');

    }

    const removeHighlight = () => {
        const circle1 = document.getElementById(values.highLightDots[0]);
        const circle2 = document.getElementById(values.highLightDots[1]);
        const circle3 = document.getElementById(values.highLightDots[2]);
        const circle4 = document.getElementById(values.highLightDots[3]);

        circle1.classList.remove('border');
        circle2.classList.remove('border');
        circle3.classList.remove('border');
        circle4.classList.remove('border');

    }

    const checkStatus = () => {
        const { verticalStatus, verWinner, verIds } = findVerticalStatus(dataObj, numX, numY);
        const { horizontalStatus, horWinner, horIds } = findHorizontalStatus(dataObj, numX, numY);
        const { diagonalStatus, diaWinner, diaIds } = findDiagonalStatus(dataObj, numX, numY);

        // console.log("horizonal: ", horizontalStatus, "horwinner", horWinner);
        // console.log("vert: ", verticalStatus, "ver", verWinner);
        // console.log("diag: ", diagonalStatus, "di", diaWinner);

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
            {modal && (
                <Modal
                    show={modal}
                    handleClose={hideModal}
                    restartGame={restartGame}
                >
                    Congratulations <strong>{values.winner === 'player2' ? player2 : player1}</strong>
                    !!!! You won.
                </Modal>
            )}
            <>
                <Players playerName={player1 || "Player 1"} color="yellow" />
                <div className="baseContainer">
                    <div className="grid_box">
                        <table cellspacing="5">
                            {generateMatrix(numX, numY)}
                        </table>
                    </div>
                </div>
                <Players playerName={player2 || "Player 2"} color="red" />
            </>

        </section>
    )
}

BaseContainer.propTypes = {
    numX: PropTypes.number,
    numY: PropTypes.number,
    player1: PropTypes.string,
    player2: PropTypes.string,
};

BaseContainer.defaultProps = {
    numX: 5,
    numY: 6,
    player1: "Player 1",
    player2: "Player 2",
};

export default BaseContainer;