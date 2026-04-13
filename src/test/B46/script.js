const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow")
const orange = document.querySelector(".orange")
const count = document.querySelector(".count")

let num = 1

document.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowRight"){
        num = num + 1
        if(num > 5){
            num = 1
        }
        cardchange()
        console.log(num)
        count.textContent = `${num}/5`
    }else if(e.key === "ArrowLeft"){
        num = num - 1
        if(num < 1){
            num = 5
        }
        console.log(num)
        cardchange()
        count.textContent = `${num}/5`
    }
})

cardchange()

function cardchange(){
    if(num == 1){
        blue.classList.remove('view')
        red.classList.add('view')
        orange.classList.remove('view')
    }else if(num == 2){
        red.classList.remove('view')
        blue.classList.add('view')
        green.classList.remove('view')
    }
    else if(num == 3){
        green.classList.add('view')
        blue.classList.remove('view')
        yellow.classList.remove('view')
    }else if(num == 4){
        yellow.classList.add('view')
        green.classList.remove('view')
        orange.classList.remove('view')
    }else if(num == 5){
        orange.classList.add('view')
        yellow.classList.remove('view')
        red.classList.remove('view')
    }
}