let count = 0
let time = 0
let startTime = null
const originalTitle = document.title
const test = document.getElementById('text')

document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState === "hidden"){
        document.title = "👀 戻ってきて！"
        count++
        startTime = Date.now() 
    }else{
        document.title = originalTitle
        if(startTime !== null){
            time += Date.now() - startTime
            startTime = null
        }
    }
    const sec = (time /1000).toFixed(1)
    test.textContent = `離れた時間:${sec}秒 離れた回数:${count}回`
})