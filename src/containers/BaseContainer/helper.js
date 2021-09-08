import Holes from '../../components/Holes';

const generateRow = (cells) => {
    const cell = [];
    for (let i = 0; i < cells; i++) {
        cell.push(<td><Holes /></td>);
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
        row.push(generateRow(cell))
    }
    return row;
}

export default generateMatrix;