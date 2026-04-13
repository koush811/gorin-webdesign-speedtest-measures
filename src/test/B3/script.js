const dispaly = document.getElementById('display')
const stopbtn = document.getElementById('stop')
const start = document.getElementById('start')

let isStart = false
let time = 10
let timerID

start.addEventListener('click',()=>{
    if(isStart) return
    isStart = true

    timerID = setInterval(()=>{
        time = time -1
        console.log(time)
        dispaly.textContent = `残り${time}秒`
        if(time < 0){
            dispaly.textContent = "完了"
            dispaly.style.color = "red"
            clearInterval(timerID)
        }
        else if(time < 5){
            dispaly.style.color = "orange"
        }
    },1000)
})

stopbtn.addEventListener('click',()=>{
    clearInterval(timerID)
    isStart = false
})
