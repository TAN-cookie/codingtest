const router = require('express').Router()

/**
 * 한 사람이 어느 특정한 사람을 중복으로 여러번 신고할 경우 1회로 처리
 * @param {Array} id_list 신고할 사람의 아이디 목록
 * @param {Array} report 신고 내역
 * @param {Number} k 신고 횟수
 * @return {Array} 신고 횟수가 k인 사람의 아이디 목록
 */

// function solution(id_list, report, k) {
//     let userId = Array.from(Array(id_list.length), () => new Array(0))
//     let result = {};
//     new Set(report).forEach(f => {
//         const to = f.split(' ')[1];
//         result[to] = (result[to] || 0) + 1;
//         if (result[to] === k) {
//             report.filter(a => a.split(' ')[1] == to).forEach(m => userId[id_list.indexOf(m.split(' ')[0])] = userId[id_list.indexOf(m.split(' ')[0])].concat(to))
//         }
//     })
//     return userId.map(m => m.length);
// }

// function solution(id_list, report, k) {
//     let userId = Array.from(Array(id_list.length), () => 0)
//     let result = {};
//     new Set(report).forEach(f => {
//         const to = f.split(' ')[1];
//         result[to] = (result[to] || 0) + 1;
//         if (result[to] === k) {
//             report.filter(a => a.split(' ')[1] == to).forEach(m => userId[id_list.indexOf(m.split(' ')[0])]++)
//         }
//     })
//     return userId;
// }

// function solution(id_list, report, k) {
//     let userId = Array.from(Array(id_list.length), () => 0)
//     let target = [];
//     let result = {};
//     new Set(report).forEach(f => {
//         const to = f.split(' ')[1];
//         target.push(f.split(' ')[0]);
//         result[to] = (result[to] || 0) + 1;
//         if (result[to] === k) {
//             target.forEach(m => userId[id_list.indexOf(m)]++)
//             target = [];
//         }
//     })

//     return userId;
// }

function solution(id_list, report, k) {
    // 유저 index 배열
    let userId = Array.from(Array(id_list.length), () => 0)
    // 중복 제거된 정지 대상자 목록
    let target = [];
    // 신고 횟수
    let result = {};
    // 신고 목록 중에서 중복 제거
    new Set(report).forEach(f => {
        const r = f.split(' ');
        target.push(r);
        result[r[1]] = (result[r[1]] || 0) + 1;
    })
    // 풀이 방법
    Object.keys(result).forEach(f => {
        if (result[f] >= k) target.filter(a => a[1] === f).forEach(m => userId[id_list.indexOf(m[0])]++)
    })
    return userId;
}

// console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)) // [2,1,1,0]
// console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)) // [0,0]
module.exports = router;