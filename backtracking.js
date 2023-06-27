// N-Queen prolems

countNQueensSolutions = function(n) {
    return countNQueensHelper(new Board(n), 0);
  
    function countNQueensHelper(board, numPlaced) {
      var n = board.size();
      // numPlaced is both our current row and the number of queens on the board
      // if we've placed n queens, we've found a solution
      if (numPlaced === n) {
        return 1;
      }
  
      var nSols = 0;
  
      // go through each column, testing if placement is valid
      for (var c = 0; c < n; c++) {
        board.togglePiece(numPlaced, c);
        // if current position is unconflicted, recur and 
        // count the solutions stemming from our current position
        if (!board.hasAnyQueenConflictsOn(numPlaced, c)) {
          nSols += countNQueensHelper(board, numPlaced + 1);
        }
        // undo the current position when we've finished exploring this subtree
        board.togglePiece(numPlaced, c);
      }
      return nSols;
    }
  };