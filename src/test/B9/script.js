const btns = document.querySelectorAll('button')
const text = document.getElementById('nav')

btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        navigator.clipboard.writeText(text.textContent)
        //navigator.clipboard.writeText("コピーしたい文字")
        btn.textContent = "コピー済み ✓"
    })
});

