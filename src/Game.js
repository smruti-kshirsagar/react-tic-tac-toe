import React from 'react'
import GameComp from './GameComp'
import './App.css'

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        return (
            <div className="game">
                <div className="game-square">
                    <GameComp />
                </div>
            </div>
            
        )
    }
}

export default Game