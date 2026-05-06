const r = document.getElementById('r')
const g = document.getElementById('g')
const b = document.getElementById('b')
const display = document.querySelector('#display')

function color(){
    console.log(r.value,g.value,b.value)
    display.textContent = `rgb(${r.value},${g.value},${b.value})`
    display.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`
}

r.addEventListener('input',()=>{
    color()
})


g.addEventListener('input',()=>{
    color()
})


b.addEventListener('input',()=>{
    color()
})

color()
