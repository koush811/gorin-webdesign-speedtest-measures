const input = document.getElementById('input')
const addbtn = document.getElementById('add')
const lists = document.getElementById('lists')

addbtn.addEventListener('click',()=>{
    teskText = input.value
    
    const li = document.createElement('li')
    li.textContent = teskText
    const complete = document.createElement('button')
    complete.classList.add("com")
    complete.textContent = "complete"
    const deletebtn = document.createElement('button')
    deletebtn.classList.add("del")
    deletebtn.textContent = "delete"
    li.appendChild(complete)
    li.appendChild(deletebtn)
    lists.appendChild(li)

    deletebtn.addEventListener('click',()=>{
        lists.removeChild(li)
    })

    complete.addEventListener('click',()=>{
        li.style.textDecoration = "line-through"
    })
})






