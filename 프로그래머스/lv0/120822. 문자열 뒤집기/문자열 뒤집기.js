function solution(my_string) {
    var strToArr = [...my_string];
    var new_string = strToArr.reverse().join('')
    return new_string;
}