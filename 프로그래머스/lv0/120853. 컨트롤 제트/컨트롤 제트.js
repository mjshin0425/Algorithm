function solution(s) {
    let answer = 0;
    s = s.split(' '); // 문자열을 공백으로 나누어서 배열로 반환
    let arr = [];
    for(let i of s) {
        if(i === 'Z') {
            arr.pop(i);
        } else arr.push(i);
        answer = arr.reduce((a, v) => a+ +v, 0); //+ 붙이면 숫자형으로 변환
    }
        return answer;
}