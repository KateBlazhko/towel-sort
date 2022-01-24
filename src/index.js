
// You should implement your task here.
let matrix = [
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
];

module.exports = function towelSort (matrix=[]) {
  let arr = []
  matrix.forEach((element, i) => {
    if ((i % 2) === 0) {
      for (let index = 0; index < element.length; index++) {
        arr.push(element[index]);
      }
    }
    if ((i % 2) !== 0) {
      for (let index = element.length - 1; index >= 0; index--) {
        arr.push(element[index]);
      }
    }
  });
  return arr;
}

