function solution(my_string) {
    let answer = 0;
    let numString = my_string.replace(/[A-z]/g, " ").split(' ');
   // 알파벳을 공백으로 바꾼 후 공백으로 떨어뜨려줘서 (문자열인) 숫자만 골라냄 
    
    console.log(numString);
    for(let i=0; i< numString.length; i++) {
           answer += Number(numString[i]);  // 숫자 타입으로 바꿔서 하나씩 더함
    }
    return answer;
}