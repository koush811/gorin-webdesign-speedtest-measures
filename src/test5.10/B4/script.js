const display = document.getElementById('display')

window.addEventListener('scroll',()=>{
    const y = window.scrollY
    const height = window.innerHeight
    const value = y

    const num = Math.floor(value/(5000-height)*100)

    display.textContent = `${num}%`
})