function solution(my_string) {
    var answer = 0;
    let splited = my_string.split(" "); // ['3', '+', '4']
    let ans = Number(splited[0]);
    
    splited.forEach((item, index) => {
        if( item === '+') {
            ans += Number(splited[index + 1]);
        } if ( item === '-') {
             ans -= Number(splited[index + 1]);
        }
    })
    return ans
}