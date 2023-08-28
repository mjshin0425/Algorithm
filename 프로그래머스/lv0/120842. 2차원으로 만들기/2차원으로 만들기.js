function solution(num_list, n) {
    var answer = [];
    for(let i=0; i < num_list.length;) {
        let innerArr = [];
        for(let j=0; j< n; j++) {
           innerArr.push(num_list[i]);
            i++
        }
        answer.push(innerArr);
    }
    return answer;
}