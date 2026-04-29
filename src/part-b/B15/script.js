const cir = document.querySelector('.cir')
const cards = document.querySelectorAll('.card')

const total = cards.length
const deg = 360 / total
const radius = 220


let index  = 0
let rotate = 0

function Card(){
    cards.forEach((card,id)=> {
        const angle = deg * id
        card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`
    });
}


function Active(){
    cards.forEach((card,id)=>{
        card.classList.toggle("active",id === index)
    })
}

function Carousel(){
    cir.style.transform = `rotateY(${rotate}deg)`
    Active()
}

Card()
Carousel()

window.addEventListener('wheel',(e)=>{
    if(e.deltaY > 0){
        rotate -= deg
        index = (index + 1) % total
    }else{
        rotate += deg
        index = (index - 1) % total
    }
    Carousel()
})

