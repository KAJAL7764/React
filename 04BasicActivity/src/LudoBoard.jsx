import { useState } from "react"


export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

let [arr, setArr] = useState(["NO MOVES"])
    let updateBlue = () => {
        // moves.blue += 1;
        // console.log(`moves.blue = ${moves.blue}`);
        // setMoves({...moves, blue: moves.blue + 1});
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1}
        });
        arr.push("Blue Moves");
        setArr(arr);
        console.log(arr);
    }
    let updateYellow = () => {
        // moves.blue += 1;
        // console.log(`moves.yellow = ${moves.yellow}`);
        // setMoves({...moves, blue: moves.blue + 1});
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        });
    }
    let updateGreen = () => {
        // moves.blue += 1;
        // console.log(`moves.green = ${moves.green}`);
        // setMoves({...moves, blue: moves.blue + 1});
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1}
        });
    }
    let updateRed = () => {
        // moves.blue += 1;
        // console.log(`moves.red = ${moves.red}`);
        // setMoves({...moves, blue: moves.blue + 1});
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1}
        });
    }
    return (
        <div>
            <h3>Game Beigns!</h3>
            <div className="board">
                <p>Blue Moves = {moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}> +1 </button>
                <p>Yellow Moves = {moves.yellow} </p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}> +1 </button>
                <p>Green Moves = {moves.green} </p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}> +1 </button>
                <p>Red Moves = {moves.red} </p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}> +1 </button>
            </div>
        </div>
    )
}
