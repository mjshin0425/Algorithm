function solution(money) {
    var answer = [];
    var cups = Math.floor(money/ 5500);
    var changes = money % 5500;
    answer = [cups, changes]
    return answer;
}