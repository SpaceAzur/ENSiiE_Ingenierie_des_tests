function sum(a,b) {
    return a + b;
}

function fizzBuzz(n) {
    let mon_tab = [];
    for(let j = 1; j <= n; j++){
        if (j % 15 == 0) { 
            mon_tab.push("FizzBuzz");
        }
        else if(j % 5 == 0) {
            mon_tab.push("Buzz");
        }
        else if(j % 3 == 0) {
            mon_tab.push("Fizz");
        }
        else {
            mon_tab.push(j);
        }
    } 
return mon_tab;
};

let alphaB = ['a','b','c','d','e','f','g','h','i',
                    'j','k','l','m','n','o','p','q',
                    'r','s','t','u','v','w','x','y','z'];
let phrase = "boNjour à Tousz";
let lowerPhrase = phrase.toLowerCase();

for(let i = 0; i < lowerPhrase.length; i++) {
    let l = lowerPhrase.charAt(i);
    console.log(lowerPhrase.charAt(i), alphaB.indexOf(lowerPhrase.charAt(i)));
    // UPPER to lower

    // cas "z"


    // cas "whitespace"
};

module.exports = sum;

