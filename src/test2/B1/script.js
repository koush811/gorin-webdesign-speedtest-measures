const input = document.querySelector('input')
const reset = document.getElementById('reset')
const stopbtn = document.getElementById('stop')
const start = document.getElementById('start')
const display = document.getElementById('display')

let isStart = false
let timeID = null

let starttime = 0
let time = 0

start.addEventListener('click',()=>{
    if(isStart)return
   
    if(time === 0){
        starttime = Number(input.value)
        //if(starttime <= 0)return
        time = starttime
    }

    const startm = String(Math.floor(time/60)).padStart(2,"0")
    const starts = String(Math.floor(time % 60)).padStart(2,"0")
    display.textContent = `${startm}:${starts}/${startm}:${starts}`
    

    isStart = true

    timeID = setInterval(() =>{

        time -= 1

        const m = String(Math.floor(time/60)).padStart(2,"0")
        const s = String(Math.floor(time % 60)).padStart(2,"0")

        display.textContent = `${m}:${s}/${startm}:${starts}`

        if(time <= 0){
            clearInterval(timeID)
            alert('終了')
            isStart = false
        }

    },1000)
})

stopbtn.addEventListener('click',()=>{
    clearInterval(timeID)
    isStart = false
})

reset.addEventListener('click',()=>{
    clearInterval(timeID)
    isStart = false
    time = 0
    display.textContent = `${starttime}/${starttime}`
})

