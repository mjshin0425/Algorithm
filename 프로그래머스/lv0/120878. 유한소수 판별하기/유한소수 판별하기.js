function solution(a, b) {
    var answer = 0;
    // 기약분수: 공약수가 1만 존재.
    // 1. 최대공약수를 구한다.
    
    
    
    let GCD = 1;
    for(let i =1; i<= b; i++) {
        if(a%i === 0 && b%i === 0) GCD =i;
    }
    
    // 2. 분모 b를 최대 공약수로 나눈다
    b = b/GCD ;
    
    // 3. b를 2와 5로 나눈 나머지 값이 0이 될때까지 반복해서 나눈다.
    // 4. b의 소인수가 2와 5만 존재한다면 1, 아니면 2.
    while (b%2 === 0) b = b/2;
    while (b%5 === 0) b = b/5;
    
    
    
    return b === 1? 1 : 2;
}