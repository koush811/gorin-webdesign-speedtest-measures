const text = document.querySelector('.text')
const input = document.querySelector('input')

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
        `<span style="background-color: yellow;">${key}</span>`
    )

    text.innerHTML= hilight
})