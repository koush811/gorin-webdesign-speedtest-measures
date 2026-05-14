const startbtn = document.getElementById('start')
const stopbtn = document.getElementById('stop')
const input = document.querySelector('input')
const display = document.querySelector('.display')

let time 
let isStart = false
let timeID
let isStop = false

startbtn.addEventListener('click',()=>{
    if(!isStop){
        time = input.value
    }
    if(time === "")return
    if(isStart) return
    isStart = true


    timeID = setInterval(()=>{
        
        display.textContent = `${time}秒`
        time-=1

        if(time < 0){
            clearInterval(timeID)
            display.textContent = "FINISH!"
            isStop = false
            isStart = false
        }

        stopbtn.addEventListener('click',()=>{
            isStart = false
            isStop = true
            clearInterval(timeID)
        })

    },1000)
})

