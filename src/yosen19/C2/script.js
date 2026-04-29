const display = document.getElementById('display')

let time = 7;

setInterval(()=>{
    time -= 1
    display.textContent = time

    if(time < 1){
        display.textContent = "Finished!"
    }
},1000)

