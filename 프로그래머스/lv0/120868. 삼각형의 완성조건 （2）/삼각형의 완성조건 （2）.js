function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    // 다른 수가 가장 긴 변인 경우
    for(let i = max+1; i < max+min; i++){
        answer ++;
    }
    // sides에 가장 긴 변이 있는 경우
    for(let i= max-min ;i < max ; i++  ){
        answer ++;
    }
    return answer;
}