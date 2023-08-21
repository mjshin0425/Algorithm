function solution(numbers, direction) {
    if(direction === "right"){
        let newArr = numbers.splice(0, numbers.length - 1);
        
        return [...numbers , ...newArr];
    }
    
    if(direction === "left"){
        let newArr = numbers.splice(1, numbers.length - 1);
        
        return [...newArr, ...numbers];
    }
}