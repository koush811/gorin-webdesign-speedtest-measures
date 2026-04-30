const btn = document.querySelector('button')
const boxs = document.querySelectorAll('.box')

function color(){
    
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return {
        rgb: `rgb(${r}, ${g}, ${b})`,
        r,g,b
    }
}

function text(r,g,b){
    const tectColor = (r + g + b)/3
    return tectColor > 127 ? "black":"white"
}

boxs.forEach(box => {
    const c = color()
    box.style.backgroundColor = c.rgb
    box.textContent = c.rgb
    box.style.color = text(c.r, c.g, c.b)
});

btn.addEventListener('click',()=>{
    boxs.forEach(box => {
        const c = color()
        box.style.backgroundColor = c.rgb
        box.textContent = c.rgb
        box.style.color = text(c.r, c.g, c.b)
    });
})

