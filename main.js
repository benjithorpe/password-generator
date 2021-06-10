const value = document.getElementById('password');
// value.textContent='YoUrPaSswoRd';
const generator = document.querySelector('button');
const numbers = "1234567890".split('');
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// [...Array(26)].map((_, y) => String.fromCharCode(y + 65));
const lowerCase = upperCase.toLowerCase();
// [...Array(26)].map((_, y) => String.fromCharCode(y + 97));
const symbols = ['~', '!', '#', '*', '.', ',', '-', '_', '+', '%'];

const upperCharCode = [];
const lowerCharCode = [65, 66, 67, 68];

// const symbols = ['~', '!', '#', '*', '.', ',', '-', '_', '+', '%', '\\', '"', '$', '&', '(', ')', '@'];
// '/', ':', ';', '<', '=', '>', '?', '@', '^', '`', '{', '|', '}', ']' ];

const range = document.querySelector("input[type='range']");

range.addEventListener('input', () => {
  document.querySelector('.rangeValue').textContent = range.value;
});

const passwordElements = [...numbers, ...upperCase, ...lowerCase, ...symbols];
// const passwordElements = [...numbers, ...alphab, ...alphas, ...symbols];


generator.addEventListener('click', () => {
  let rawPass = [];
  const currentRange = range.value;

  for (let i = 0; i < currentRange; i++) {
    let single = Math.floor(Math.random() * passwordElements.length);
    rawPass.push(passwordElements[single]);
  }

  console.log(rawPass);
  document.querySelector('.output').textContent = rawPass.join('');
  // value.textContent = rawPass.join('');
});

const generatePassword = (length) => {
  return "hello Password";
};;
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





