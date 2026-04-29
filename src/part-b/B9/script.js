const btns = document.querySelectorAll('button')
const text = document.getElementById('nav')

btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        navigator.clipboard.writeText(text.textContent)
        btn.textContent = "コピー済み ✓"
    })
});

