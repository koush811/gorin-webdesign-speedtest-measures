const openbtn = document.querySelector('.open')
const closebtn = document.querySelector('.close')
const dialog = document.querySelector('dialog')

openbtn.addEventListener('click',()=>{
    dialog.classList.add('active')
    dialog.showModal(); //背景操作無効
    document.body.classList.add('wrap')
})

closebtn.addEventListener('click',()=>{
    dialog.classList.remove('active')
    document.body.classList.remove('wrap')
    dialog.close()
})