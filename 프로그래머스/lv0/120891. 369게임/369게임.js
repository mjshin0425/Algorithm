function solution(order) {
    return Array.from(String(order)).filter(v=>v=='3'||v=='6'||v=='9').length;
}