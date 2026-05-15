const cir = document.querySelector('.cir')

let x = 0
let y = 0

let i = 0

document.addEventListener('keydown',(e)=>{
    if(e.key === "ArrowUp"){
        y -= 10
        cir.style.top = `${y}px`
    }else if(e.key === "ArrowDown"){
        y += 10
        cir.style.top = `${y}px`
    }else if(e.key === "ArrowLeft"){
        x -= 10
        cir.style.left = `${x}px`
    }else if('ArrowRight'){
        x += 10
        cir.style.left = `${x}px`
    }

    if(x > window.innerWidth){
        x = window.innerWidth 
    }else if(x < 0){
        x = 0
    }

    if(y < 0){
        y = 0
    }else if(y > innerHeight-10){
        y = innerHeight
    }
})