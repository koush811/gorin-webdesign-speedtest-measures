const display = document.querySelector('.text')
const input = document.querySelector('input')

function color(){
    return`rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
    )`
}

const origin = display.textContent
input.addEventListener('input',()=>{
    const key = input.value
    if(key === ""){
        display.textContent = origin
        return
    }


    const hilight = origin.replaceAll(key,(match)=>{
        return`<span style="background-color: ${color()};">${match}</span>`
    })

    display.innerHTML = hilight

})