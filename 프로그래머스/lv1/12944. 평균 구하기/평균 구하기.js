function solution(arr) {
    var answer = 0;
    sum = arr.reduce((acc, cur) => acc + cur , 0)
    answer = sum/arr.length
    return answer;
}