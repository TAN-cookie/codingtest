const router = require('express').Router()
/**
 * 
 * @param {number} denum1 분수의 분자 1
 * @param {number} num1 분수의 분모 1
 * @param {number} denum2 분수의 분자 2
 * @param {number} num2 분수의 분모 2
 * @returns 
 * 
 */
// console.log(4 % 4)
function solution(denum1, num1, denum2, num2) {
    // let cnt = 1
    // console.log(num1 * denum2 + num2 * denum1)
    // console.log(num1 * num2)
    // while (cnt) {
    //     if ((num1 * cnt) % num2 == 0)
    //         break;
    //     cnt++
    // }
    // let num = (num1 * cnt) / num2
    // console.log(cnt)
    // console.log(num)
    // result = [denum1 * cnt + denum2 * num, num2 * num]
    let x = num1 * denum2 + num2 * denum1;
    let y = num1 * num2;
    let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    let min = gcd(x, y);
    return [x / min, y / min];
}
// 아직 푸는중 22-10-19

console.log(solution(1, 2, 3, 4))
module.exports = router;
