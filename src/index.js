
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) {
    return [];
  }
  matrix.forEach(arr => {
    if (matrix.indexOf(arr) % 2 === 0) {
      arr.forEach((el) => {
        result.push(el);
      });
    } else if (matrix.indexOf(arr) % 2 !== 0) {
      for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
      }
    }
  });
  return result;
};
