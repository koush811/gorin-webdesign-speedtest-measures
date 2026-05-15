const display = document.getElementById('display')
const startbtn = document.getElementById('start')

let time = 10
let timeID

startbtn.addEventListener('click',()=>{
    startbtn.disabled = true
    timeID = setInterval(()=>{
        time -= 1
        
        if(time < 1){
            time = 10
            display.textContent = time
            alert("Finished!")
            startbtn.disabled = false
            clearInterval(timeID)
            display.style.color = "black"
            
        }else if(time < 4){
            display.style.color = "#ff0000"
            display.textContent = time
        }else{
            display.textContent = time
            display.style.color = "black"
        }
        
    },1000)
})