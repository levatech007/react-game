import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gridSize: 5,
      grid: [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]],
      color: 'blue',
      count: 0
    }
    this.squareClicked = this.squareClicked.bind(this)
  }


  squareClicked(row, column) {
    console.log(this.state.grid)
    if (this.state.grid[row][column] === 0) {
      let currentState = this.state.grid
      let cloneOfState = currentState.slice(0);
      cloneOfState[row][column] = this.state.color;
      this.setState({
            grid: cloneOfState,
          })
    //change color of the square from state
   let newGridState = this.state.grid
   let lastIndex = this.state.gridSize - 1
     if(row === 0 && column === 0) { // if clicked on left top corner
       let right = newGridState[row][column+1]
       let bottom = newGridState[row+1][column]
       if (newGridState[row][column] === right || newGridState[row][column] === bottom) {
         this.setState( previousCount => {return {count: previousCount.count + 1}})
       }
     } else if (row === 0 && column === lastIndex) { //if clicked on right top corner
      let left = newGridState[row][column-1]
      let bottom = newGridState[row+1][column]
      if (newGridState[row][column] === left || newGridState[row][column] === bottom) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    } else if (row === lastIndex && column === 0) {   //if clicked on bottom left corner
      let right = newGridState[row][column+1]
      let top = newGridState[row-1][column]
      if (newGridState[row][column] === top || newGridState[row][column] === right) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    } else if (row === lastIndex && column === lastIndex) {//if clicked on bottom right corner
      let left = newGridState[row][column-1]
      let top = newGridState[row-1][column]
      if (newGridState[row][column] === left || newGridState[row][column] === top) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    } else if ((column !== 0 && row === 0) || (column !== lastIndex && row === 0)) {  // if clicked on top row
      let left = newGridState[row][column-1];
      let right = newGridState[row][column+1];
      let bottom = newGridState[row+1][column];
      if (newGridState[row][column] === left || newGridState[row][column] === right || newGridState[row][column] === bottom) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    } else if ((column !== 0 && row === lastIndex) || (column !== lastIndex && row === lastIndex)) {//if clicked on bottom row
      let left = newGridState[row][column-1];
      let right = newGridState[row][column+1];
      let top = newGridState[row-1][column];
      if (newGridState[row][column] === left || newGridState[row][column] === right || newGridState[row][column] === top) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    } else if ((row !== 0 && column === 0) || (row !== lastIndex && column === 0)) { //if clicked on left column
      let right = newGridState[row][column+1];
      let top = newGridState[row-1][column];
      let bottom = newGridState[row+1][column];
      if (newGridState[row][column] === top || newGridState[row][column] === right || newGridState[row][column] === bottom) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    } else if ((row !== 0 && column === lastIndex) || (row !== lastIndex && column === lastIndex)) { //if clicked on right column
      let left = newGridState[row][column+1];
      let top = newGridState[row-1][column];
      let bottom = newGridState[row+1][column];
      if (newGridState[row][column] === left || newGridState[row][column] === top || newGridState[row][column] === bottom) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    } else {
      let left = newGridState[row][column-1];
      let right = newGridState[row][column+1];
      let top = newGridState[row-1][column];
      let bottom = newGridState[row+1][column];
      if (newGridState[row][column] === left || newGridState[row][column] === top || newGridState[row][column] === bottom || newGridState[row][column] === right) {
        this.setState( previousCount => {return {count: previousCount.count + 1}})
      }
    }
 }
    //change color in state to a random new color
    let colors = ["blue", "red", "green", "yellow", "purple", "pink"]
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    this.setState({color: randomColor})

  }

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-md-center'>
          <h1>Next color: <span style={ {color: this.state.color} }>{this.state.color}</span></h1>
        </div>
        <div className='row justify-content-md-center'>
          <h2>Matches count: {this.state.count}</h2>
        </div>
            {
              this.state.grid.map((oneRow, rowIndex) => {
                return( <div className='row justify-content-md-center'>
                  {
                    oneRow.map((oneSquare, colIndex) => {
                      return( <div className='col-sm-1 square' style={ {backgroundColor: oneSquare} } onClick={ () => this.squareClicked(rowIndex, colIndex) }></div> )
                    })
                  }
                </div>)
              })
            }
      </div>
    );
  }
}

export default App;
