const openbtn = document.getElementById('open')
const dialog = document.querySelector('dialog')
const wrap = document.getElementById('wrap')

openbtn.addEventListener('click',()=>{
    dialog.classList.add('active')
    wrap.classList.add('active')
})

wrap.addEventListener('click',()=>{
    dialog.classList.remove('active')
    wrap.classList.remove('active')
})

window.addEventListener('keydown',(e)=>{
    if(e.key === "Escape"){
        dialog.classList.remove('active')
        wrap.classList.remove('active')
    }
})