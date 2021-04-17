const value = document.getElementById('password');
value.textContent='YoUrPaSswoRd';
const generator = document.getElementsByTagName('button')[0];
const numbers = "1234567890".split('');
const upperCaseLetters = [...Array(26)].map((_, y) => String.fromCharCode(y + 65)); 
const lowerCaseLetters = [...Array(26)].map((_, y) => String.fromCharCode(y + 97));
const symbols = ['~', '!', '#', '*', '.', ',', '-', '_', '+', '%'];

// const symbols = ['~', '!', '#', '*', '.', ',', '-', '_', '+', '%', '\\', '"', '$', '&', '(', '), '/', ':', ';', '<', '=', '>', '?', '@', '[', ']' ];
// , '^', '`', '{', '|', '}', ']' ];


const passwordElements = [...numbers, ...upperCaseLetters, ...lowerCaseLetters, ...symbols];
// const passwordElements = [...numbers, ...alphab, ...alphas, ...symbols];


generator.addEventListener('click', function(){
    let rawPass = [];
    
    for(let i = 0; i < 12; i++){
        let single = Math.floor(Math.random() * passwordElements.length);
        rawPass.push(passwordElements[single])
    }

    console.log(rawPass)
    value.textContent = rawPass.join('');
});
// generator.addEventListener('click', function(){
//     let rawPass = [];
    
//     for(let i=0; i<12; i++){
//         let single = Math.floor(Math.random() * passwordElements.length);
//         rawPass.push(passwordElements[single])
//     }

//     console.log(rawPass)
//     value.textContent = rawPass.join('');
// });

// ==========





