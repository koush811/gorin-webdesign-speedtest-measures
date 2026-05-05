const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


function move(){
    
    ctx.fillStyle = "white"
    
    let x = 400
    setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.arc(x,150,10,0,Math.PI * 2)
        ctx.fill()

        x = x-1
    },10)
}

move()