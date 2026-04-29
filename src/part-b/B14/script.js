const context = document.getElementById("menu")
const copy = document.getElementById('copy')
const paste = document.getElementById('paste')
const Delete = document.getElementById('delete')
const info = document.getElementById("info")

maxwidth = window.innerWidth * 0.8
maxheight = window.innerHeight * 0.8


window.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    x = e.clientX
    y = e.clientY

    

    context.style.display = "block"

    if(x > maxwidth){
        x = x - context.offsetWidth
    }

    if(y > maxheight){
        y = y - context.offsetHeight
    }

    context.style.left = `${x}px`
    context.style.top = `${y}px`

})

copy.addEventListener('click',()=>{
    alert('コピー')
})
paste.addEventListener('click',()=>{
    alert('貼り付け')
})
Delete.addEventListener('click',()=>{
    alert('削除')
})
info.addEventListener('click',()=>{
    alert('情報')
})

window.addEventListener('click',()=>{
    context.style.display = "none"
})

