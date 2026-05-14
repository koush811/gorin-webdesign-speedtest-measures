const openbtn = document.getElementById('open')
const closebtn = document.getElementById('close')
const wrap = document.querySelector('.wrap')
const dialog = document.querySelector('dialog')

openbtn.addEventListener('click',()=>{
    wrap.classList.add('active')
    dialog.classList.add('active')
})

closebtn.addEventListener('click',()=>{
    wrap.classList.remove('active')
    dialog.classList.remove('active')
})