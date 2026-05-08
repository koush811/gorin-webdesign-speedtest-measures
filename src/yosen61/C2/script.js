const inputHex = document.getElementById('hex')
const inputR = document.getElementById('r')
const inputG = document.getElementById('g')
const inputB = document.getElementById('b')
const toRGBbtn = document.getElementById('toRgb')
const toHEXbtn = document.getElementById('toHex')
const answer = document.querySelector('.answer')
const answerColor = document.querySelector('.answerColor')

toHEXbtn.addEventListener('click',()=>{
    const r = Number(inputR.value)
    const g = Number(inputG.value)
    const b = Number(inputB.value)

    const rgb = [r,g,b]
    let hex = "#"

    rgb.forEach((v)=> {
        hex +=v.toString(16).padStart(2,"0").toUpperCase()
    })

    answer.textContent = hex
    answerColor.style.backgroundColor = `rgb(${r},${g},${b})`


})

toRGBbtn.addEventListener('click',()=>{
    const hex = inputHex.value
    
    const r = parseInt((hex.slice(1,3)),16)
    const g = parseInt((hex.slice(3,5)),16)
    const b = parseInt((hex.slice(5,7)),16)
    
    answer.textContent = `rgb(${r},${g},${b})`
    answerColor.style.backgroundColor = hex

})
