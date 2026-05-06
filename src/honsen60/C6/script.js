const square =  document.getElementById('square')

window.addEventListener('mousemove',(e)=>{
    const x = e.clientX
    const y = e.clientY 


    square.style.top = `${y-5}px`
    square.style.left = `${x-5}px`
})