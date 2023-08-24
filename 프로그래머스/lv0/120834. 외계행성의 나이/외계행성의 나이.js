function solution(age) {
    
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    const newAge = age + "";
    
    return newAge.split("").map((e) => alphabet[e]).join("");
}