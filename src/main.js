import $ from 'jquery';
import './styles.css';
// import { sudokuCheck } from './sudoku-checker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#puzzle").submit(function(){
    event.preventDefault();

    for(var i = 1; i < 4; i++){
      for(var j = 1; j <4; j++){
        for(var k = 1; k < 10; k++){
          var test = $(".bigrow-"+i+ " .row" +j+ " ." +k).val();
          console.log(test);
        }
      }
    }
  });
});
