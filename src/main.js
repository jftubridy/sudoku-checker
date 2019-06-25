import $ from 'jquery';
import './styles.css';
import { SudokuCheck } from './sudoku-checker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#puzzle").submit(function(){
    event.preventDefault();

    var board =[[0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]];

    var currentRow = 0;

    for(var i = 1; i < 4; i++){
      for(var j = 1; j < 4; j++){
        for(var k = 1; k < 10; k++){
          if(isNaN(parseInt($(".bigrow-"+i+ " .row" +j+ " ." +k).val()))){
            board[currentRow][k-1] = 0;
          } else {
            board[currentRow][k-1] = parseInt($(".bigrow-"+i+ " .row" +j+ " ." +k).val());
          }
        }
        currentRow++;
      }
    }
    console.log(board);

    var userSolution = new SudokuCheck(board);
    var gameMessage = userSolution.checkBoard();
    $("#result").html(gameMessage);

  });
});
