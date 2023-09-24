function solution(n) {
    var answer = 0;
    const numCheck = (k) => {
        const numbers = String(k).split("");
        if(k%3 === 0 || numbers.includes("3")) {
            answer++
            numCheck(answer)
        } else {
            return
        }
    }
    for (let i=0; i< n; i++) {
        answer++
       numCheck(answer)
    }
    return answer;
}