const openbtn = document.getElementById('open')
const closebtn = document.getElementById('close')
const dialog = document.querySelector('dialog')
const wrap = document.getElementById('wrap')

dialog.style.display = "none"
wrap.style.display = "none"

openbtn.addEventListener('click',()=>{
    dialog.style.display = 'block'
    wrap.style.display = "block"
    document.body.style.overflow = "hidden"
})

closebtn.addEventListener('click',()=>{
    dialog.style.display = "none"
    wrap.style.display = "none"
})

wrap.addEventListener('click',()=>{
    dialog.style.display = "none"
    wrap.style.display = "none"
})