const steps = document.querySelectorAll('.step')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const finishbtn = document.getElementById('finishbtn')

let num = 1

next.addEventListener('click',()=>{
    num++

    if(num > 3){
        num = 3
    }

    update()
})

prev.addEventListener('click',()=>{
    num--

    if(num < 1){
        num = 1
    }

    update()
})

const finish = document.querySelector('.finish')

function update(){
    steps.forEach(step => {
        step.classList.remove('active')
    });

    if(num === 1){
        steps[0].classList.add('active')        
    }else if(num === 2){
        steps[1].classList.add('active')  
    }else if(num === 3){
        steps[2].classList.add('active')  
    }
}

finishbtn.addEventListener('click',()=>{
    steps.forEach(step =>{
            step.classList.remove('active')
    })
    finish.style.display = "block"
    next.style.display = "none"
    prev.style.display = "none"
    finishbtn.style.display = "none"
})

update()
