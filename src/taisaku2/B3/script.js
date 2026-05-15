const display = document.getElementById('time')
const start = document.getElementById('start')
const stopbtn = document.getElementById('stop')

let isStart = false
let timeID 
let startTime = 0
let time = 0

start.addEventListener('click',()=>{
    if(isStart) return
    isStart = true
    startTime = Date.now() - time

    timeID = setInterval(()=>{
        time = Date.now() - startTime

        const ms = String(Math.floor((time%1000)/10)).padStart(2,"0")
        const s = String(Math.floor(time % (1000 * 60) / 1000)).padStart(2,"0")
        const m = String(Math.floor(time / (60 * 1000))).padStart(2,"0")

        display.textContent = `${m}:${s}:${ms}`
    },10)
})

stopbtn.addEventListener('click',()=>{
    clearInterval(timeID)
    isStart = false
})
