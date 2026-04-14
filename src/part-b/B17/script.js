const weight = document.getElementById('weight')
const color = document.getElementById('color')
const del = document.getElementById('delete')
const canvas = document.getElementById('canvas')
const eraser = document.getElementById('eraser')
const ctx = canvas.getContext('2d')

console.log(weight.value)

canvas.width = 500
canvas.height = 300

let prevX = 0
let prevY = 0

let isdraw = false
let isEraser = false

eraser.addEventListener('click',()=>{
    isEraser = true
})

canvas.addEventListener("pointerdown",(e)=>{
    isdraw = true
    prevX = e.offsetX 
    prevY = e.offsetY 
    canvas.setPointerCapture(e.pointerId);
})

canvas.addEventListener("pointermove",(e)=>{
    if(!isdraw)return

    
     ctx.globalCompositeOperation = isEraser ? "destination-out" : "source-over";
    ctx.strokeStyle = color.value
    ctx.lineWidth = weight.value || 1
    ctx.beginPath()
    ctx.moveTo(prevX,prevY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    ctx.lineCap = "round"

    
    prevX = e.offsetX
    prevY = e.offsetY
})

canvas.addEventListener("pointerup",()=>[
    isdraw = false
])

color.addEventListener('input',()=>{
    isEraser = false
})

weight.addEventListener('input',()=>{
    isEraser = fa
})

del.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

