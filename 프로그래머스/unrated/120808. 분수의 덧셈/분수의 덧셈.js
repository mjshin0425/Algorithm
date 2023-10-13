function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    // 분자 구하기
    const a = numer1*denom2 + numer2*denom1;
    // 분모 구하기
    const b = denom1*denom2;
    
    // 최대공약수 구하기
    // 1. a를 b로 나눈다. 나누어지면 b는 최대공약수이다.(a>b)
    // 2. 안나눠지면 b를 나머지(a%b)로 나눈다.
    // 3. 나눠지면 나머지가 최대공약수이다. 반복
    function gcd(a, b) {
        const remainder = a % b;
        if(remainder === 0) {
            return b;   // 종료조건
        }
        else {
            return gcd(b, remainder) // 반복 
        }
        
    }
    return [a/gcd(a,b), b/gcd(a,b)];
}