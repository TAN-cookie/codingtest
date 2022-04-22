const router = require('express').Router()

/**
 * 문자열 다루기 기본
 * @param {String} s 문자열
 */

function solution(s) {
    return +s && !s.match(/[a-z]/gi) && (s.length === 4 || s.length === 6) ? true : false;
}

// console.log(solution("a234")) // false
// console.log(solution("1e22")) // true
// console.log(solution("1234")) // true


module.exports = router;