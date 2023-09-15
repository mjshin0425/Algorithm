function solution(M, N) {
    var answer = 0;
    let 가로 = M-1; // m 장
    let 세로 = N-1;
    answer = (M-1)+(N-1)*(M);
    return answer;
}