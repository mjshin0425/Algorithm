function solution(num_list) {
    const mult = num_list.reduce((a, b) => a * b);
    const pow_sum = Math.pow(num_list.reduce((a, b) => a + b), 2);
    if ( mult < pow_sum) {
        return 1
    } else { return 0 }
}
