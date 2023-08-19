function solution(num_list) {
    var answer = 0;
    const odd = [...num_list].filter((e) => e % 2 === 1).join('');
    const even = [...num_list].filter((e) => e % 2 === 0).join('');
    answer = Number(odd) + Number(even);
    return answer;
}