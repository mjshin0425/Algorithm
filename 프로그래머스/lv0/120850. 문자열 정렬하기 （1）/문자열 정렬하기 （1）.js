function solution(my_string) {
    const answer = [...my_string].filter(e => !Number.isNaN(+e)).map(a=>+a).sort((a,b)=> a-b);
    return answer;
}