const text = document.getElementById('text')
const input = document.querySelector('input')
const start = document.getElementById('start')

const words = ["りんご","みかん","テンニンカ"]
let answer = ""
let miss = 0
let i = 0
let isNext = true


start.addEventListener('click',()=>{
    next()
})

function next(){
    if(!isNext)return
    answer = words[i]
    text.textContent = answer
    isNext = false
    i+=1
    if(i === 4){
        text.textContent = "終了"
    }
}

const result = document.getElementById('result')
const misscount = document.getElementById('count')
misscount.textContent = `MISS:${miss}回`

document.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        const value = input.value
        if(answer === value){
            result.textContent = "一致"
            isNext = true
            next()
        }else{
            result.textContent = "不一致"
            miss += 1
            misscount.textContent = `MISS:${miss}回`
        }
    }
})