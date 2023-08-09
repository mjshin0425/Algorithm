function solution(num_str) {
    const num_split = num_str.split('');
    const nums = num_split.map(Number);
    
    return nums.reduce((a, c) => a + c, 0);
}