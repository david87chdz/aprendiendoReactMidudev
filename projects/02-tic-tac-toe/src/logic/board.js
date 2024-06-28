import { WINNING_COMBINATIONS } from '../constants';
export const checkWinner = (boardToCheck) => {
    for (let combo of WINNING_COMBINATIONS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
    //Si no hay ganador
    return null;
}

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
}
