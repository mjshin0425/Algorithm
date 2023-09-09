function solution(spell, dic) {
     spell = spell.sort().join('');
     dic = dic.map( e=> e.split("").sort().join('')); // 'dxz'
    
     return dic.includes(spell) ? 1 : 2;
}