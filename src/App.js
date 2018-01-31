import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [[0,0,1,0], [0,2,3,0], [0,5,6,0], [0,0,0,0]],
      color: 'blue'
    }
    this.squareClicked = this.squareClicked.bind(this)
    this.getNextColor = this.getNextColor.bind(this)
  }

  // getNextColor() {
  //   let colors = ["blue", "red", "green"]
  //   return colors[Math.floor(Math.random()*colors.length)]
  // }

  squareClicked(row, column) {

    let currentSquare = this.state.grid[row][column]
    if (currentSquare === 0) {
      //change color of the square from state
      //change currentSquare = colorKey
    }




    //change color of square if square is empty

      //check the array for matches with idx below:
      //arr[row][column + 1] arr[row][column - 1] arr[row+1][column] arr[row-1][column]
     //if any matches, clear both squares of color
     //if no matches, change the 0 at arr[row][column] equal to color key
     //set state to new array, next color
  }


  render() {
    let boardSizeArray = Array.apply(0, Array(4));
    return (
      <div className='container'>
        <h2>Next color:{this.state.color}</h2>
            {
              boardSizeArray.map((oneRow, rowIndex) => {
                return( <div className='row justify-content-md-center'>
                  {
                    boardSizeArray.map((oneSquare, colIndex) => {
                      return( <div className='col-sm-1 square' onClick={ () => this.squareClicked(rowIndex, colIndex) }></div> )
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
