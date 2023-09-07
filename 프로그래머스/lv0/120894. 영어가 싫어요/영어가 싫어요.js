function solution(numbers) {
    let answer = 0;
    let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i=0; i< nums.length; i++) {
        numbers = numbers.split(nums[i]).join(i);
        answer = Number(numbers);
    }
    return answer;
}