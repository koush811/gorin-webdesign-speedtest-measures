const text = document.querySelector('.text')
const input = document.querySelector('input')

function color(){
    return`rgb(
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)}
    )`
}

input.addEventListener('input',()=>{
    const origin = text.textContent
    const key = input.value

    if(key === ""){
        text.textContent = origin
        return;
    }

    const regex = new RegExp(key,"g")

    const hilight = origin.replaceAll(
        regex,
        `<span style="background-color: ${color()};">${key}</span>`
    )

    text.innerHTML= hilight
})