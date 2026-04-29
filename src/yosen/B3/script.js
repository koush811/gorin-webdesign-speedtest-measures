const box = document.querySelector(".box")

let isdraggging = false
let boxx = 0
let boxy = 0

box.addEventListener('mousedown',(e)=>{
    boxx = e.clientX - box.getBoundingClientRect().left
    boxy = e.clientY - box.getBoundingClientRect().top
    isdraggging = true
})
document.addEventListener('mousemove',(e)=>{
    if(!isdraggging) return

    const x = e.clientX - boxx
    const y = e.clientY - boxy

    box.style.left = `${x}px`
    box.style.top = `${y}px`
})

document.addEventListener('mouseup',()=>{
    isdraggging = false
})
