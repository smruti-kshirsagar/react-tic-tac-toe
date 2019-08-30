import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <Game totalStar={10} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));