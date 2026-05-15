const answer = document.getElementById('answer')
const a = document.getElementById('a')
const b = document.getElementById('b')
let items = ["小吉","大吉","凶","大凶"]
let i = 0

a.addEventListener('click',()=>{
    const value = Math.floor(Math.random() * items.length)
    console.log(value)
    const pick = items.splice(value,1)[0]
    answer.textContent = pick
    i += 1
    if(i > 3){
        a.disabled = true
    }
})

b.addEventListener('click',()=>{
    items = ["小吉","大吉","凶","大凶"]
    i = 0
    a.disabled = false
    answer.textContent = ""
})
    


