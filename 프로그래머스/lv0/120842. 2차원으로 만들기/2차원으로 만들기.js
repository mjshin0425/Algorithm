function solution(num_list, n) {
    var answer = [];
    for(let i=0; i < num_list.length;) {
        let innerArr = [];
        for(let j=0; j< n; j++) {
           innerArr.push(num_list[i]); //121212
            i++    // 여기에 i++을 쓰지 않으면 121212 반복. 배열에 들어가는 값이 증가되지 않음
        }
        answer.push(innerArr);
    }
    return answer;
}