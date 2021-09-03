const chessBoard = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      let first = "";
      for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
          first = first + " ";
        } else {
          first = first + "#";
        }
      }
      console.log(first);
    } else {
      let sec = "";
      for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
          sec = sec + "#";
        } else {
          sec = sec + " ";
        }
      }
      console.log(sec);
    }
  }
};

chessBoard(8);
