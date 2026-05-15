const text = document.querySelector('.text')

window.addEventListener('scroll',()=>{
    a()
})

function a(){
    const height = window.innerHeight 
    const scroll = window.scrollY
    
    const ave = Math.floor((scroll / (5000 - height) ) *100)
    text.textContent = `${ave}%`
}
a()