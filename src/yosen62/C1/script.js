const input = document.querySelector('input')
const display = document.getElementById('display')

input.addEventListener('input',()=>{
    const len = input.value.length
    display.textContent = len
})