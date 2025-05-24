const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789'
const symbol = '~!@#$%^&*()_+{}[]:;"|\?/>.<,'
const similer = 'AAaaBBbbCCccDDddEEeeFFffGGggHHhhIIiijjJJkkKKllLLmmMMNNnnOOooPPppQQqqRRrrSSssTTttUUuuVVvvXXxxYYyyZZzz'
const upperCaseCheck = document.querySelector('.upperCase');
const lowerCaseCheck = document.querySelector('.lowerCase');
const  symbleCheck = document.querySelector('.symbol');
const numberCheck = document.querySelector('.number');
const similerCheck = document.querySelector('.similer');
const lengthCheck = document.querySelector('.number-input');
document.querySelector('.submit-btn').addEventListener('click',()=>{
  const  length=parseInt(lengthCheck.value);
    let chars = '';
    let password = '';
    if(upperCaseCheck.checked) {chars+=upperCase;}
    if(lowerCaseCheck.checked){chars+=lowerCase;}
    if(symbleCheck.checked){chars+=symbol;}
    if(numberCheck.checked){chars+=number;}
    if(similerCheck.checked){chars+=similer;}

    for(let i =0; i<length; i++){
        const randomIndex = Math.floor(Math.random()*chars.length);
        password+=chars[randomIndex]
    }

    document.querySelector('.result-display').innerHTML = password;
  
});

const copyItem = document.querySelector('.copyItems');
const copy = copyItem.value
document.querySelector('.copy-btn').addEventListener('click',()=>{

navigator.clipboard.writeText(copy)

})

