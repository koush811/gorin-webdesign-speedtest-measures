const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

let x = 0

setInterval(()=>{
    ctx.clearRect(0,0,400,320)
    ctx.beginPath()
    ctx.arc(x,160,100,20,50)
    ctx.fill()
    
    x = x+1

    if(x > 600){
        x = 0
    }
})