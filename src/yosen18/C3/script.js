const square = document.getElementById('square')

window.addEventListener('mousemove',(e)=>{
    const x = e.clientX - square.offsetWidth / 2
    const y = e.clientY - square.offsetHeight / 2

    square.style.left = `${x}px`
    square.style.top = `${y}px`
})