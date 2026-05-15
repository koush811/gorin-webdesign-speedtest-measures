const input = document.querySelector('input')
const text = document.getElementById('text')
const btn = document.querySelector('button')

input.addEventListener('input',()=>{
    const len = input.value.length
    console.log(len)
    text.textContent = `${len}/140`
    
    
    if(len >= 140){
        text.style.backgroundColor = "red"
        btn.disabled = true
    }else if(len >= 120){
        text.style.backgroundColor = "yellow"
    }else{
        btn.addEventListener('click',()=>{
            text.textContent = "送信されました！"
        })
    }
})