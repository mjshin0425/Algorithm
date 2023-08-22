function solution(num, k) {
    let answer = num.toString().indexOf(k)+1 || -1;
    return answer;
}