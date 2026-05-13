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

    timeID = setInterval(()=>{
        if(isStart) return
        display.textContent = `${time}秒`
        time-=1

        if(time < 0){
            clearInterval(timeID)
            display.textContent = "FINISH!"
        }

        stopbtn.addEventListener('click',()=>{
            isStart = false
            clearInterval(timeID)
            isStop = true
        })

        

    },1000)
})

