const router = require('express').Router()

/**
 * 없는 숫자 더하기
 * @param {Array} numbers 숫자 배열
 * @return {Number} 없는 숫자 더하기
 */

solution = (numbers) => 45 - numbers.reduce((acc, cur) => acc + cur, 0);

/**
 * array add missing numbers
 */
// console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])) // missing number 5+9 = 14
// console.log(solution([5,8,4,0,6,7,9])) // missing number 1+2+3 = 6
module.exports = router;