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