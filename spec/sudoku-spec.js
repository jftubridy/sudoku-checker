import { SudokuCheck } from './../src/sudoku-checker.js';

describe('SudokuCheck', function() {

  it('should test whether a row contains all numbers from 1 to 9 with no repeats', function() {
    var row = new SudokuCheck([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    for(var i = 0; i < row.spaces.length; i++){
      for(var j = i + 1; j < row.spaces.length; j++){
        expect(row.spaces[i]).not.toEqual(row.spaces[j]);
        console.log(row.spaces[i] + " compare " + row.spaces[j]);
      }
    }


  });

  // it('should correctly determine whether three lengths can be made into a triangle', function() {
  //   var notTriangle = new Triangle(3,9,22);
  //   expect(notTriangle.checkType()).toEqual("not a triangle");
  // });

});

// describe('Triangle', function() {
//   var reusableTriangle;
//
//   beforeEach(function() {
//     reusableTriangle = new Triangle(5, 5, 5);
//   });
//
//   it('should show how beforeEach() works', function() {
//     console.log(reusableTriangle);
//   });
// });
