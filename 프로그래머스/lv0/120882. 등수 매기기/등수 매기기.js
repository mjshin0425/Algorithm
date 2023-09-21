function solution(score) {
    
    let avg = score.map(e=> (e[0] + e[1])/2); // 평균
    let sorted = avg.slice().sort((a,b) => b-a); // 내림차순 정렬
    
    return avg.map(v => sorted.indexOf(v) + 1);
    
}
 