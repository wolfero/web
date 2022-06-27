import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import Board from "./components/Board/Board";
import { Value } from "./models/Board/board";
import styles from "./TicTacToe.module.scss";

function calculateWinner(squares: Value[]) {
    const winningCombinations = [
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        //vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        //Cruz
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let line = 0; line < winningCombinations.length; line++) {
        const [lef, c, r] = winningCombinations[line];
        const leftEqualsCenter = squares[lef] && squares[lef] === squares[c];
        const leftEqualsRight = squares[lef] === squares[r];
        if (leftEqualsCenter && leftEqualsRight) {
            return squares[lef];
        }
    }

    return null;
}

const firstPLayer = "X";
const secondPlayer = "O";
function getNextPlayer(squares: Value[]) {
    return squares.filter(Boolean).length % 2 === 0
        ? firstPLayer
        : secondPlayer;
}

function isFilled(squares: Value[], nextPlayer: "X" | "O") {
    return squares.every(Boolean) ? "Draw" : `Next player: ${nextPlayer}`;
}

const DEFAULT_BOARD = Array<Value>(9).fill(null);
export const Game = () => {
    const [squares, setSquares] = useState(DEFAULT_BOARD);
    const winner = calculateWinner(squares);
    const nextPlayer = getNextPlayer(squares);

    const onRestartClick = useCallback(
        () => setSquares(DEFAULT_BOARD),
        [setSquares]
    );

    const onSquareClick = useCallback(
        (index: number) => {
            const validation = !winner && !squares[index];
            if (validation) {
                const result = setSquares([
                    ...squares.slice(0, index),
                    nextPlayer,
                    ...squares.slice(index + 1),
                ]);
                return result;
            }
        },
        [nextPlayer, setSquares, squares]
    );

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark" ? styles.DarkMode : styles.LightMode;
    const restartButtonClass = [styles.Restart, isDark].join(" ");

    return (
        <Box className={styles.Game} px={"20"} py={"5"}>
            <Heading className={styles.NextPLayer}>
                {winner ? `Winner: ${winner}` : isFilled(squares, nextPlayer)}
            </Heading>
            <button className={restartButtonClass} onClick={onRestartClick}>
                Restart
            </button>
            <Board
                {...{
                    onSquareClick,
                    squares,
                    isDark,
                }}
            />
        </Box>
    );
};

export default Game;