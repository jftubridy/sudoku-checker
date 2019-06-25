export function SudokuCheck(spaces) {
  this.spaces = spaces;

}

SudokuCheck.prototype.checkBoard = function() {

  var passRow = true, passCol = true;

  for(var i = 0; i < this.spaces.length; i++){
    for(var j = 0; j < this.spaces[0].length; j++){
      for(var k = j + 1; k < this.spaces[0].length; k++){
        if( this.spaces[i][j] === this.spaces[i][k] ){
          passRow = false;
        }

      }
    }
  }

  for(var y = 0; y < this.spaces.length; y++){
    for(var u = 0; u < this.spaces[0].length; u++){
      for(var h = u + 1; h < this.spaces[0].length; h++){
        if( this.spaces[u][y] === this.spaces[h][y] ){
          passCol = false;
        }

      }
    }
  }

  if(passRow === true && passCol === true){
    return "sweet victory";
  } else {
    return "try again";
  }

};
