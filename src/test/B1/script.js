const cards = document.querySelectorAll('.card')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const num = document.getElementById('num')
let dev = 1

next.addEventListener('click',()=>{
    dev = dev + 1
    if(dev > 5){
        dev = 1
    }
    console.log(dev)
    
    num.textContent = `${dev}/5`
})

prev.addEventListener('click',()=>{
    dev = dev - 1
    if(dev < 1){
        dev = 5
    }
    console.log(dev)
    num.textContent = `${dev}/5`
})

function change(){
    cards.forEach(card => {
        if(card.textContent === dev){
            card.classList.toggle = "a"
        }
    });
}


