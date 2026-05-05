const hari = document.querySelector('.hari')
let num = 0
let isStart = false
let timeID

document.getElementById('start').addEventListener('click',()=>{
    if(isStart)return
    isStart = true
    timeID = setInterval(()=>{
        num += 1
        hari.style.transform = `rotate(${360+6*num}deg)`
    },1000)
})

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(timeID)
    isStart = false
})

document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(timeID)
    isStart = false
    num = 0
    hari.style.transform = `rotate(0deg)`
})