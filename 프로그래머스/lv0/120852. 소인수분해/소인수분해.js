function solution(n) {
    let arr = [];
    let i = 2;
    
    for ( let i = 2; i<= n ; ) {
        if (n % i === 0) {  // 약수인 i
            arr.push(i);
            n = n / i;     // n을 약수로 나눔
            // n이 더 이상 약수 i로 나눠지지 않을 때까지 반복
             while (n % i === 0) {  
                n = n / i; 
            }
        } else i ++;  // i 가 약수면 중복됨.
        
    }
    return answer = [...new Set(arr)]; // 중복제거
}