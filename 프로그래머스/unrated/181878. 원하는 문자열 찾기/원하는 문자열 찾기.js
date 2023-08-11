function solution(myString, pat) {
    const low_str = myString.toLowerCase();
    const low_pat = pat.toLowerCase();
    
    return low_str.includes(low_pat) ? 1: 0;
}