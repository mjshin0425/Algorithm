function solution(A, B) {
    var answer = 0;
    let arrA = [...A];
    console.log(arrA);
    
   for(i=0 ; i < arrA.length; i++) {
       if( A ===  B ) {
           return i;
       } else {
           arrA.unshift(arrA.pop());
            //console.log(arrA.join(''), i);   
            //ohell 0
            //lohel 1
           if(arrA.join('') === B) {
               return i + 1;
           }
        } 
    } return -1;
       
}