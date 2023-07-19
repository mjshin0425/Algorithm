function solution(array) {
    var asc_array = array.sort((a,b)=> a-b);
    var mid_num = Math.floor(array.length/2);
    answer = asc_array[mid_num];
    return answer;
}