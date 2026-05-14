const text = document.querySelector('.text')
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    if(text.textContent === "ナイトモードテスト"){
        text.textContent = "ライトモードテスト"
        text.style.color = "#000"
        document.body.style.backgroundColor = "#FFF"
        console.log(2)
    }
    else if(text.textContent === "ライトモードテスト"){
        text.textContent = "ナイトモードテスト"
        text.style.color = "#FFF"
        console.log(1)
        document.body.style.backgroundColor = "#000"
    }
})