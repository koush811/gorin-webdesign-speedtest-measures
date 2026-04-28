const display = document.getElementById('display')
const input = document.querySelector('input')
const btn = document.querySelector('button')

const word = "abcdefghij"

btn.addEventListener('click',()=>{
    const len = input.value;

    let pass = "";

    for(let i = 0; i < len; i++){
        const random = Math.floor(Math.random() * 10)
        console.log(random) 
        pass += word[random]
    }

    display.textContent = pass


})