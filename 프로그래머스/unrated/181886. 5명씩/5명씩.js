function solution(names) {
    var answer = [];
   while(names.length !==0) {
       let first = names.splice(0,5)[0];
       answer.push(first);
   } 
    return answer;
}