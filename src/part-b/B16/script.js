const addbtn = document.getElementById('addbtn')
const deletebtn = document.getElementById('delete')
const changebtn = document.getElementById('change')

const display = document.getElementById('display')
const loglist = document.getElementById('loglist')

function addlog(message){
    const li = document.createElement('li')
    li.textContent = message
    loglist.appendChild(li)

    while(loglist.children.length > 10){
        loglist.removeChild(loglist.lastElementChild)
    }
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    addlog(node.textContent)
                }
            })

            mutation.removedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    addlog(`削除: ${node.textContent}`)
                }
            })
        }

        if (mutation.type === 'attributes') {
            addlog(`属性変更: ${mutation.attributeName}`)
        }
    })
})

observer.observe(display, {
    childList: true,
    attributes: true,
    subtree: true
})

addbtn.addEventListener('click',()=>{
    const p = document.createElement('p')
    p.className = "item"
    p.textContent = "追加"
    display.appendChild(p)
})

deletebtn.addEventListener('click',()=>{
    const last = display.querySelector(".item:last-child")
    last.remove()
})

changebtn.addEventListener('click',()=>{
    const first = document.querySelector('.item')
    first.style.color = "red"
})

