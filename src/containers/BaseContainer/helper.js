export class holeData {
    constructor(positionX, positionY, color) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

export const resetObj = (dataObj, row, cell) => {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cell; j++) {
            const id = `${i}-${j}`
            // console.log(id)
            dataObj?.[id]?.setColor('blank');
            document.getElementById(id).style.background = "rgba(255, 255, 255, 0.747)";
        }
    }
}

export const findDiagonalStatus = (dataObj, numX, numY) => {
    let data = { diagonalStatus: false, diaWinner: null, diaIds: [] }

    for (let i = 0; i < numX; i++) {
        for (let j = 0; j < numY; j++) {
            if (j >= 3 && numX - i >= 4) {
                const testId1 = `${i}-${j}`;
                const testId2 = `${i + 1}-${j - 1}`;
                const testId3 = `${i + 2}-${j - 2}`;
                const testId4 = `${i + 3}-${j - 3}`;
                if (dataObj[testId1].color === dataObj[testId2].color &&
                    dataObj[testId2].color === dataObj[testId3].color &&
                    dataObj[testId3].color === dataObj[testId4].color) {
                    if (dataObj[testId4].color === 'rgb(255, 255, 0)') {
                        data.diagonalStatus = true;
                        data.diaWinner = 'player1';
                        data.diaIds.push(testId1);
                        data.diaIds.push(testId2);
                        data.diaIds.push(testId3);
                        data.diaIds.push(testId4);

                        return data;
                    }
                    else if (dataObj[testId4].color === 'rgb(255, 0, 0)') {
                        data.diagonalStatus = true;
                        data.diaWinner = 'player2';
                        data.diaIds.push(testId1);
                        data.diaIds.push(testId2);
                        data.diaIds.push(testId3);
                        data.diaIds.push(testId4);

                        return data;
                    }
                }
            }

            else if (numY - j >= 4 && numX - i >= 4) {
                const testId1 = `${i}-${j}`;
                const testId2 = `${i + 1}-${j + 1}`;
                const testId3 = `${i + 2}-${j + 2}`;
                const testId4 = `${i + 3}-${j + 3}`;
                if (dataObj[testId1].color === dataObj[testId2].color &&
                    dataObj[testId2].color === dataObj[testId3].color &&
                    dataObj[testId3].color === dataObj[testId4].color) {
                    if (dataObj[testId4].color === 'rgb(255, 255, 0)') {
                        data.diagonalStatus = true;
                        data.diaWinner = 'player1';
                        data.diaIds.push(testId1);
                        data.diaIds.push(testId2);
                        data.diaIds.push(testId3);
                        data.diaIds.push(testId4);

                        return data;
                    }
                    else if (dataObj[testId4].color === 'rgb(255, 0, 0)') {
                        data.diagonalStatus = true;
                        data.diaWinner = 'player2';
                        data.diaIds.push(testId1);
                        data.diaIds.push(testId2);
                        data.diaIds.push(testId3);
                        data.diaIds.push(testId4);

                        return data;
                    }
                }
            }
        }
    }
    return data;
}

export const findHorizontalStatus = (dataObj, numX, numY) => {
    let data = { horizontalStatus: false, horWinner: null, horIds: [] }
    for (let j = 0; j < numX; j++) {
        for (let i = 0; i < numY; i++) {
            if (numY - i >= 4) {
                const testId1 = `${j}-${i}`;
                const testId2 = `${j}-${i + 1}`;
                const testId3 = `${j}-${i + 2}`;
                const testId4 = `${j}-${i + 3}`;
                if (dataObj[testId1].color === dataObj[testId2].color &&
                    dataObj[testId2].color === dataObj[testId3].color &&
                    dataObj[testId3].color === dataObj[testId4].color) {
                    if (dataObj[testId4].color === 'rgb(255, 255, 0)') {
                        data.horizontalStatus = true;
                        data.horWinner = 'player1';
                        data.horIds.push(testId1);
                        data.horIds.push(testId2);
                        data.horIds.push(testId3);
                        data.horIds.push(testId4);

                        return data;
                    }
                    else if (dataObj[testId4].color === 'rgb(255, 0, 0)') {
                        data.horizontalStatus = true;
                        data.horWinner = 'player2';
                        data.horIds.push(testId1);
                        data.horIds.push(testId2);
                        data.horIds.push(testId3);
                        data.horIds.push(testId4);

                        return data;
                    }
                }
            }
        }
    }
    return data;
}


export const findVerticalStatus = (dataObj, numX, numY) => {
    let data = { verticalStatus: false, verWinner: null, verIds: [] }
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

                    if (dataObj[testId4].color === 'rgb(255, 255, 0)') {
                        data.verticalStatus = true;
                        data.verWinner = 'player1';
                        data.verIds.push(testId1);
                        data.verIds.push(testId2);
                        data.verIds.push(testId3);
                        data.verIds.push(testId4);

                        return data;
                    }
                    else if (dataObj[testId4].color === 'rgb(255, 0, 0)') {
                        data.verticalStatus = true;
                        data.verWinner = 'player2';
                        data.verIds.push(testId1);
                        data.verIds.push(testId2);
                        data.verIds.push(testId3);
                        data.verIds.push(testId4);

                        return data;
                    }
                }
            }
        }
    }
    return data;
}

