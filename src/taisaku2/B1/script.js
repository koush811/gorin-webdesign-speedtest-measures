const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const save = document.getElementById('save')

let x = 0

setInterval(()=>{
    ctx.clearRect(0,0,400,300)
    ctx.beginPath()
    ctx.fillRect(x,150,50,50)
    ctx.fillStyle = "red"
    ctx.fill()
    ctx.closePath()
    x++

    if(x > 500){
        x = 0
    }
})

save.addEventListener('click',()=>{
    const image = canvas.toDataURL('img/png')
    const a = document.createElement('a')
    a.href = image
    a.download = 'canvas-image.png'
    a.click()
})


