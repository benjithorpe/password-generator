const value = document.getElementById('password');
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

const passwordElements = [...numbers, ...upperCase, ...lowerCase];


generator.addEventListener('click', () => {
  let rawPass = [];
  const currentRange = range.value;

  for (let i = 0; i < currentRange; i++) {
    const single = Math.floor(Math.random() * passwordElements.length);
    rawPass.push(passwordElements[single]);
  }

  document.querySelector('.output').textContent = rawPass.join('');
});

const generatePassword = (length) => {};
