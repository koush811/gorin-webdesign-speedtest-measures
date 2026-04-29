const cells = document.querySelector('.cells')
let style = "black"

for(let i = 0; i < 16; i++ ){
    for(let j = 0; j < 16; j++ ){
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cells.appendChild(cell)
        cell.addEventListener('click',()=>{
            cell.style.backgroundColor = style
        })
    }   
}

function change(i){
    style = i
}

const btns = document.querySelectorAll('button')

btns.forEach((btn)=>{
    btn.classList.remove('active')
    btn.addEventListener('click',()=>{
        btn.classList.add('active')
    })
})




