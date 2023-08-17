function solution(n, numlist) {
    var answer = [];
    return numlist.filter((v) => v % n === 0);
}