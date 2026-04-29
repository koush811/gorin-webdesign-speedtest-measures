const input = document.querySelector('input')
const display = document.getElementById('display')
const btn = document.querySelector("button")

input.addEventListener('input',()=>{
    len = input.value.length
    display.textContent = `残り文字数${140 - len}`
    if(len > 140){
        over = len - 140
        display.textContent = `超過${over}`
        display.style.color = "red"
        btn.disabled = true
    }else if(len == 140){
        display.style.color = "red"
    }else if(len > 120){
        display.style.color = "yellow"
    }
})