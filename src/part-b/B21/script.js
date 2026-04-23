const boxes = document.querySelectorAll('.box')
const start = document.querySelector('button')
const text = document.getElementById('text')

let current = 0

start.addEventListener('click',()=>{
    text.textContent = ""
    current = 0
    startMove(current)
})

function startMove(id){
    if(id >= boxes.length){
        text.textContent = "完了！"
    }else{
        const box = boxes[id]

        box.classList.add("move")

        box.addEventListener("animationend",()=>{
            box.classList.remove("move")

            startMove(id+1)
        }, { once: true })

    }
}

