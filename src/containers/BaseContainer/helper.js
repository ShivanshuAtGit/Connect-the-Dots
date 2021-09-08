import Holes from '../../components/Holes';

let dataObj = {};
let numX, numY;
class holeData {
    constructor(positionX, positionY, color) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

const findHorizontalStatus = () => {
    let data = { horizontalStatus: false, horWinner: 'null' }
    for (let j = 0; j < numX; j++) {
        for (let i = 0; i < numY; i++) {
            if (numY - i >= 4) {
                const testId1 = `${j}-${i}`;
                const testId2 = `${j + 1}-${i}`;
                const testId3 = `${j + 2}-${i}`;
                const testId4 = `${j + 3}-${i}`;
                if (dataObj[testId1].color === dataObj[testId2].color &&
                    dataObj[testId2].color === dataObj[testId3].color &&
                    dataObj[testId3].color === dataObj[testId4].color) {
                    data.horizontalStatus = true;
                    if (dataObj[testId4].color === 'rgb(255, 0, 0)')
                        data.horWinner = 'player1';
                    else data.horWinner = 'player1';
                    return data;
                }
            }
        }
    }
    return data;
}


const findVerticalStatus = () => {
    let data = { verticalStatus: false, verWinner: 'null' }
    for (let j = 0; j < numY; j++) {
        for (let i = 0; i < numX; i++) {
            if (numX - i >= 4) {
                const testId1 = `${i}-${j}`;
                const testId2 = `${i + 1}-${j}`;
                const testId3 = `${i + 2}-${j}`;
                const testId4 = `${i + 3}-${j}`;
                if (dataObj[testId1].color === dataObj[testId2].color &&
                    dataObj[testId2].color === dataObj[testId3].color &&
                    dataObj[testId3].color === dataObj[testId4].color) {
                    data.verticalStatus = true;
                    if (dataObj[testId4].color === 'rgb(255, 0, 0)')
                        data.verWinner = 'player1';
                    else data.verWinner = 'player1';
                    return data;
                }
            }
        }
    }
    return data;
}

const checkStatus = () => {
    const { verticalStatus, verWinner } = findVerticalStatus();
    const { horizontalStatus, horWinner } = findHorizontalStatus();
    // const { diagonalStatus, diaWinner } = findVerticalStatus();

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
    numX = rows;
    numY = cell;
    const row = [];
    for (let i = 0; i < rows; i++) {
        row.push(generateRow(cell, i))
    }
    return row;
}

export default generateMatrix;