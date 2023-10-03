function solution(numlist, n) {
    let answer = [];
    answer = numlist.sort((a, b) => {
        const [numA, numB] = [Math.abs(a-n), Math.abs(b-n)]; // 뒤-n, 앞-n
    // console.log([numA, numB]); 
    //     [ 10, 9970 ]
    //     [ 6, 10 ]
    //     [ 17, 6 ]
    //     [ 10, 17 ]
    //     [ 24, 10 ]
    //     [ 20, 24 ]
    //     [ 6970, 20 ]
        if(numA === numB) {
            return b - a;  // 같으면 큰 수가 앞에 오도록 배치
        }else 
            return numA - numB;
    })
    return answer;
}



// function solution(numlist, n) {
//     var answer = [];
//     for(i = 0; i < numlist.length ; i++) {
//         let distance = Math.abs(numlist[i] - n); // 거리 =  차의 절댓값
//         let arr =[];
//         arr.push( numlist[i], distance);  // arr = [numlist 요소, 거리]
//         answer.push(arr);  // 2차 배열 생성
//         // ditance 기준으로 정렬
//         arr.sort((a, b) => (a, b) => a[1]-b[1]);
//         //     // distance 같으면 요소 기준 오름차순 정렬
//         //     if (a[1] === b[1] ) {
//         // return a[0] - b[0]
//         //         // 아니면 distance 기준 오름차순 정렬
//         // } else a[1] - b[1]
//         // });
           
        
//         console.log(answer);
        
//     }
//     //return answer;
// }