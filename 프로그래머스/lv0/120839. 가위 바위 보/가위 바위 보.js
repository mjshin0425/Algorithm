function solution(rsp) {
    var answer = '';
    for(let i = 0; i <rsp.length; i++) {
        let cpt = rsp.charAt(i);
        if (cpt === "2") {
            answer += "0";
        } else if (cpt === "0") {
            answer += "5";
        } else if (cpt === "5") {
            answer += "2";
        }
    }
    return answer;
}