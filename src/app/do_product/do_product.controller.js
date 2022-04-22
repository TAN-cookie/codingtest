const router = require('express').Router()

/**
 * 내적
 * @param {Array} a 숫자 배열
 * @param {Array} b 숫자 배열
 * @return {Number} 내적
 */

solution = (a, b) => a.reduce((acc, cur, i) => acc + cur * b[i], 0);

// console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])) // 3
// console.log(solution([-1, 0, 1], [1, 0, -1])) // -2
module.exports = router;