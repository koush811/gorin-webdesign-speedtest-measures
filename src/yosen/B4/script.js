const back = document.querySelector(".back")

back.addEventListener('mousemove',(e)=>{
    const x = e.clientX
    const y = e.clientY

    console.log(x,y)

    back.style.backgroundColor = `rgb({${x},${y},255)`
})