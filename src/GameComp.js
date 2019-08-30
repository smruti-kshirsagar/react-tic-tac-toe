import React from 'react';

function selectWinner(squares) {
    const combination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i<combination.length; i++) {
        const [a,b,c] = combination[i]
        console.log(a+"  "+b+"  "+c)
        if(squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
}
class GameComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(false),
            nextMove: true
        }
    }
    
    plotSquare(i) {
        const {squares} = this.state;
        return (
            <button className="square"
                onClick= {() => this.handleSquareClick(i)}> 
            {squares[i]}
            </button>
        )
    }
    handleSquareClick(i) {
        const {squares, nextMove} = this.state;
        squares[i] = nextMove ? "X" : "0"
        this.setState({
            squares: squares,
            nextMove: !nextMove
        })
    }
    resetGame() {
        this.setState({
            squares: Array(9).fill(false)
        })
    }
    moveToState() {

    }
    render() {
        const {squares} = this.state
        const winner = selectWinner(squares)
        const moveState = 1
        return(
            <div>
                <div className="game-row">
                    {this.plotSquare(0)}{this.plotSquare(1)}{this.plotSquare(2)}
                </div>
                <div className="game-row">
                    {this.plotSquare(3)}{this.plotSquare(4)}{this.plotSquare(5)}
                </div>
                <div className="game-row">
                    {this.plotSquare(6)}{this.plotSquare(7)}{this.plotSquare(8)}
                </div>
                <div>Winner of the game is : {winner}</div>
                <div onClick={() => this.moveToState()}>Move to state : {moveState}</div>
                <button onClick={() => this.resetGame()}>Reset</button>
            </div>
        )
    }
}

export default GameComp