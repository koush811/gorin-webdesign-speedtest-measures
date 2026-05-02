const items = document.getElementById('items')
const btns = document.querySelectorAll('.colorbtn')

/*
let colorid = "red"

for(i = 0;i<256; i++){
    const item = document.createElement('div')
    item.classList.add('item')
    items.appendChild(item)

    item.addEventListener('click',()=>{
        item.style.backgroundColor = colorid
        
    })
}

btns.forEach(btn =>{
    btn.style.backgroundColor = btn.dataset.color
})

btns[0].classList.add('active')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(otherBtn => otherBtn.classList.remove('active'))
        btn.classList.add('active')
        colorid = btn.dataset.color
    })
})*/

let colorid = "red"

for(i = 0;i<256;i++){
    const item = document.createElement('div')
    item.classList.add('item')
    items.appendChild(item)

    item.addEventListener('click',()=>{
        item.style.backgroundColor = colorid
    })
}

btns.forEach(btn => {
    btn.style.backgroundColor = btn.dataset.color
    btn.addEventListener('click',()=>{
        btns.forEach(other =>{
            other.classList.remove('active')
        })
        colorid = btn.dataset.color
        btn.classList.add('active')
    })
});


    









