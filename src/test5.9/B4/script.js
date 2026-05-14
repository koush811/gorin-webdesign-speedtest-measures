const input = document.querySelector('input')
const text = document.getElementById('text')
const color = document.getElementById('color')

input.addEventListener('input',()=>{
    console.log(input.value)
    color.style.backgroundColor = input.value

    const hex = input.value

    const r = parseInt(hex.slice(1,3),16)
    const g = parseInt(hex.slice(3,5),16)
    const b = parseInt(hex.slice(5,7),16)

    text.textContent = `hex:${hex} rgb(${r},${g},${b})`
})