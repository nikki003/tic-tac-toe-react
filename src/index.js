import { React, Component } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <Button 
            variant="outline-secondary"
            className="square" 
            onClick={ () => {this.setState({value: 'X'})} }
            >
                {this.state.value}
            </Button>
        )
    };

}

class Board extends Component {
    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        const status = 'Next Player - X'
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            <div className="game-info">
                <div>{"___STATUS___"}</div>
                <ol>{"__TODO__"}</ol>
            </div>
            </div>
        )
    }
}

ReactDom.render(
    <Game />,
    document.getElementById('root')
);