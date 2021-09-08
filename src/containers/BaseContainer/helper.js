import Holes from '../../components/Holes';

const generateRow = (cells, row) => {
    const cell = [];
    for (let i = 0; i < cells; i++) {
        const id = `${row}-${i}`;
        cell.push(<td><Holes id={id} /></td>);
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

export default generateMatrix;