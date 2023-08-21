function solution(my_string, num1, num2) {
    const answer = '';
    const str1 = my_string[num1];
    const str2 = my_string[num2];
    const splitStr = my_string.split('');
    
     splitStr[num1] = str2;
     splitStr[num2] = str1;
    return splitStr.join('');
}