function solution(n) {
    const answer = String(n).split("").reverse().map((data)=>(Number(data)));
    return answer;
}