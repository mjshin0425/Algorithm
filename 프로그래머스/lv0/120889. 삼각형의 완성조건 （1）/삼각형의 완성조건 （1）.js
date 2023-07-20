function solution(sides) {
    var sides = sides.sort((a,b) => a-b);
    if (sides[0]+sides[1] > sides[2]) {
        answer = 1;
    } else answer = 2;
    
    return answer;
}