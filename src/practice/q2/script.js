const display = document.getElementById('display')
const start = document.getElementById('start')
const stopbtn = document.getElementById('stop')
const reset = document.getElementById('reset')
const rap = document.getElementById('rap')
const rapList = document.getElementById('rap-list')

let isStart = false
let startTime = 0
let time = 0
let IntervalID

start.addEventListener('click',()=>{
    if(isStart) return
    startTime = Date.now() - time

    IntervalID = setInterval(()=>{
        time = Date.now() - startTime

        const ms = time % 1000
        const totalseconds = Math.floor( time /1000)
        const second = totalseconds % 60
        const totalminute = Math.floor( totalseconds /60 )
        const minute = totalminute % 60
        const hour = Math.floor(totalminute / 60)

        const StrMs = ms.toString().padStart(3,"0")
        const StrSecond = second.toString().padStart(2,"0")
        const StrMinute = minute.toString().padStart(2,"0")
        const StrHour = hour.toString().padStart(2,"0")

        display.textContent = `${StrHour}:${StrMinute}:${StrSecond}:${StrMs}`
    },10)
})
 
stopbtn.addEventListener('click',()=>{
    clearInterval(IntervalID)
    isStart = false
})

reset.addEventListener('click',()=>{
    clearInterval(IntervalID)
    isStart = false
    time = 0
    display.textContent = "00:00:00:000"
})

rap.addEventListener("click",()=>{
        const li = document.createElement("li")
        li.textContent = display.textContent
        rapList.appendChild(li)
   
})
