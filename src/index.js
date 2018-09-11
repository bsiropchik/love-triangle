/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(0)
  let sum = 0;

  for(i=1; i<=preferences.length; i++){
    let current = preferences[i];
    let sec = preferences[current];
    let thrd = preferences[sec];
    if (current != sec && sec != thrd && thrd != current && thrd === i) {
      sum++
    }
  }
  return sum/3
};
