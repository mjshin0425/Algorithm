function solution(n) {
    var answer = 0
     var a = n.toString().split('')
          for(let i =0; i<=a.length-1; i++){
         answer+=parseInt(a[i])
     }
     return answer    
}