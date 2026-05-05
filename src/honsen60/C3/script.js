const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let color = 'red'
let isdrawing = false
let x,y

canvas.addEventListener('mousedown',(e)=>{
    isdrawing = true
    ctx.beginPath()
    ctx.moveTo(e.offsetX,e.offsetY)
    
})

canvas.addEventListener('mousemove',(e)=>{
    if(!isdrawing) return
    ctx.strokeStyle = color
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.lineWidth = 2
    ctx.stroke()
})

canvas.addEventListener('mouseup',()=>{
    isdrawing = false
    ctx.closePath()
})

const btns = document.querySelectorAll('div')
/*
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        color = btn.dataset.color
    })
});
*/

function Color(id){
    color = id
}

document.getElementById('delete').addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})



