const disply = document.getElementById('display')

setInterval(()=>{
    
    const time = new Date()
    
    const h = String(time.getHours()).padStart(2,"0")
    const m = String(time.getMinutes()).padStart(2,"0")
    const s = String(time.getSeconds()).padStart(2,"0")


    disply.textContent = `${h}:${m}:${s}`
})