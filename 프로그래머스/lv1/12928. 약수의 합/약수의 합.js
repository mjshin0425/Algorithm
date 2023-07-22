function solution(n) {
    const array = [];
    for (let i=0; i<= n ; i++) {
        if (n % i === 0) 
            array.push(i)
    } 
    const sum = array.reduce((a,b) => a+b, 0);
    return sum;
} 