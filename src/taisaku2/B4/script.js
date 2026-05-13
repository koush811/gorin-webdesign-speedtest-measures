const box = document.getElementById('box')

let x,y
let isDrag = false

box.addEventListener('mousedown',()=>{
    isDrag = true
})

box.addEventListener('mousemove',(e)=>{
    if(!isDrag)return
    x = e.clientX - (box.offsetWidth/2)
    y = e.clientY - (box.offsetHeight/2)

    box.style.top = `${y}px`
    box.style.left = `${x}px`
})

box.addEventListener('mouseover',()=>{
    isDrag = false
})

box.addEventListener('mouseup',()=>{
    isDrag = false
})