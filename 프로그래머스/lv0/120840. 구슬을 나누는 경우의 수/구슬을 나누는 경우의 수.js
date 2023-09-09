//n = balls, m = share
 // let factorial = function fac(n) {
 //     if(n < 2) {
 //         return 1;
 //    } else {
 //        n * fac(n-1);
 //    }  
 // };




// function solution(balls, share) {
//     return Math.round(
//     factorial(balls)/ factorial(balls - share) / factorial(share)
//     );
   
//    // return answer;
// }
 const factorial = (num) => (num < 2 ? 1 : num * factorial(num - 1));

function solution(balls, share) {
  return Math.round(
    factorial(balls) / factorial(balls - share) / factorial(share)
  );
}