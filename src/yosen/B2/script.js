const text = document.getElementById('text')

window.addEventListener('keydown',(e)=>{
    text.style.display = "block"
    if(e.key === "Enter"){
            text.textContent = "Enter"
        }else if(e.key === "Escape"){
            text.textContent = "Escape"
        }
    setTimeout(()=>{
        text.style.display = "none"
    },2000)
    
})