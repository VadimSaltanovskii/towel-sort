
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  if (matrix.length === 0) {
    return []
  }
  let reversed = matrix.map((element, index) => {
    if (index % 2 !== 0) {
      return matrix[index].reverse()
    } else {
      return element
    }
  })
  
  let result = []

  reversed.forEach(element => {
    result.push(...element)
  });

  return result
}
