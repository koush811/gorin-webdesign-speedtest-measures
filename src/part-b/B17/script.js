const weight = document.getElementById('weight')
const color = document.getElementById('color')
const del = document.getElementById('delete')
const canvas = document.querySelector('canvas')
const eraser = document.getElementById('eraser')
const ctx = canvas.getContext('2d')

let isdraw = false
let isEraser = false
let prevX = 0
let prevY = 0

canvas.width = 500
canvas.height = 300

canvas.addEventListener('pointerdown',(e)=>{
    isdraw = true
    prevX = e.offsetX
    prevY = e.offsetY
})

canvas.addEventListener('pointermove',(e)=>{
    if(!isdraw) return
    if(!isEraser){
        ctx.strokeStyle = color.value
    }else{
        ctx.strokeStyle = "white"
    }
    ctx.lineWidth = weight.value || 1
    ctx.lineCap = "round"
    ctx.beginPath()
    ctx.moveTo(prevX,prevY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()

    prevX = e.offsetX
    prevY = e.offsetY
})

canvas.addEventListener('pointerup',()=>{
    isdraw = false
})

canvas.addEventListener('pointerleave',()=>{
    isdraw = false
})

color.addEventListener('input',()=>{
    isEraser = false
})

weight.addEventListener('input',()=>{
    isEraser = false
})

del.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

eraser.addEventListener('click',()=>{
    isEraser = true
})


