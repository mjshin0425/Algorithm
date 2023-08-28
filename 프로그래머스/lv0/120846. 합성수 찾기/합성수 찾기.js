function solution(n) {
    let answer = 0
    //n 이하를 돌리는 for문
    for(i=1; i<=n; i++) {
        let counter = 0
        // 합성수를 찾는 for문
        for(j=1; j<=i ; j++) {
            if(i%j == 0) {
                counter += 1
            }
        }
//모든 수는 1과 자기 자신을 약수를 가지므로 counter는 3개부터 센다
        if(counter > 2) {
            answer += 1
        }
    }
    return answer
}