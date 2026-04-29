const back = document.querySelector('.back')
const btn = document.querySelector('button')
const text = document.querySelector('.text')

btn.addEventListener('click',()=>{
    back.classList.toggle("night")
    if(text.textContent === "ライトモード"){
        text.textContent = "ナイトモード"
    }else{
        text.textContent = "ライトモード"
    }
})