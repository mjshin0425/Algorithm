function solution(my_str, n) {
    var answer = [];
    let Arr = my_str.split("");
    
    for(let i=0; i< my_str.length; i +=n) {
        answer.push(my_str.slice(i, i+n));
    }
    
    return answer;
}