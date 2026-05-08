const input = document.querySelector('input')
const btn = document.querySelector('button')
const textitem = document.getElementById('text')

function color(){
    return `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
    )`
}

btn.addEventListener('click',()=>{
    const origin = textitem.textContent
    const key = input.value

    const hilight = origin.replaceAll(
        key,
         `<span style="background-color: ${color()};">${key}</span>`
    )

    textitem.innerHTML = hilight
})