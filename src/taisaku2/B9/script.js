const qnum = document.getElementById('qnum')
const qtext = document.getElementById('qtext')
const input = document.querySelector('input')
const qbtn = document.getElementById('qbtn')

const question = document.getElementById('question')
const result = document.getElementById('result')

const texts = ["答え1","答え2","答え3"]
const answer = ["1","2","3"]

let i = 0
let count = 0



function  text(){
    qnum.textContent = `${i+1}問目`
    qtext.textContent = texts[i]
    question.classList.add('active')
    result.classList.remove('active')
}

text()

const rnum = document.getElementById('rnum')

qbtn.addEventListener('click',()=>{
    const value = input.value
    if(value === "")return

    if(value === answer[i]){
        count += 1
    }

    i += 1
    text()

    console.log(i)

    if(i === 3){
        question.classList.remove('active')
        result.classList.add('active')

        rnum.textContent = `正解数${count}`
    }
})

document.getElementById('restart').addEventListener('click',()=>{
    i = 0
    count = 0
    text()
    
})