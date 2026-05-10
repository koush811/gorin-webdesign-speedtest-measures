const ul = document.querySelector('ul')
const add = document.getElementById('add')
const input = document.getElementById('input')

add.addEventListener('click',()=>{
    if(input.value === "")return
    const comp = document.createElement('button')
    comp.textContent = "完了"
    const discomp = document.createElement('button')
    discomp.textContent = "未完了"
    const li = document.createElement('li')
    const textarea = document.createElement('ol')
    textarea.textContent = input.value

    li.appendChild(textarea)
    li.appendChild(comp)
    li.appendChild(discomp)

    ul.appendChild(li)

    comp.addEventListener('click',()=>{
        textarea.style.textDecoration = "line-through"
    })

    discomp.addEventListener('click',()=>{
        textarea.style.textDecoration = "none"
    })
})