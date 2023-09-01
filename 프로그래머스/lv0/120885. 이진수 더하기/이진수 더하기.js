function solution(bin1, bin2) {
    let a = parseInt(bin1, 2);  // 2
    let b = parseInt(bin2, 2);  // 3
    // (a+b).toString();  // 5
    let plus = (a+b).toString(2);  // 101
    
    return plus;
}