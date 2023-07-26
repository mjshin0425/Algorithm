function solution(num_list) {
    let last1 =num_list[num_list.length-1] 
    let last2 = num_list[num_list.length-2]
    if(last1 > last2) {
       num_list.push(last1-last2)
    } else {
        num_list.push(last1*2)
    }
  return num_list
}