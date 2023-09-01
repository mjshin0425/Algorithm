function solution(s) {
    var answer = [];
    //let sArr = s.split('');
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            answer.push(s[i])
        }
    }
    return answer.sort().join('');
}