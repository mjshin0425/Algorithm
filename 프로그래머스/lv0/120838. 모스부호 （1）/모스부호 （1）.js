//function solution(letter) {
 //   let answer = '';
 //   let morse = { 
 //   '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
 //   '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
 //   '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
 //   '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
 //   '-.--':'y','--..':'z'
 //   }
    //모스부호는 공백을 기준으로 나뉘어져 있으므로, 공백을 기준으로 나눈 후 모스부호를 입력
 //   return answer = letter.split(" ").map((e) => morse[e]);
//}

const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};

function solution(letter) {
    let currentMorse = '';
    let answer = '';
    for(let i=0; i<letter.length; i++){
        const item = letter[i];
        if(item === ' '){
            answer += morse[currentMorse];
            currentMorse = '';
        } else {
            currentMorse += item;
        }
    }
    answer += morse[currentMorse];
    return answer;
}