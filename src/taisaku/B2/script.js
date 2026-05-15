const ul = document.querySelector('ul')
const addbtn = document.getElementById('add')
const input = document.querySelector('input')


addbtn.addEventListener('click',()=>{
    if(input.value === "")return
    const lists = document.querySelectorAll('li')

    const li = document.createElement('li')

    const text = document.createElement('ol')
    text.textContent = input.value
    const compbtn = document.createElement('button')
    compbtn.textContent = "COMPLETE"
    const deletebtn = document.createElement('button')
    deletebtn.textContent = "DELETE"

    li.appendChild(text)
    li.appendChild(compbtn)
    li.appendChild(deletebtn)

    ul.appendChild(li)

    compbtn.addEventListener('click',()=>{
        text.style.textDecoration = "line-through"
    })

    deletebtn.addEventListener('click',()=>{
        ul.removeChild(li)
    })

    if(lists.length > 10){
        ul.removeChild(ul.firstChild)
    }
})

