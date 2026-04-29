const list = document.querySelector('.lists')
let dragging = null

list.addEventListener("dragstart",(e)=>{
    dragging = e.target.closest(".item")
    dragging.style.opacity = ".2"
})

list.addEventListener("dragover",(e)=>{
    e.preventDefault()
    const target = e.target.closest(".item")
    if(target && target !== dragging){
        const items = [...list.children]
        const dragId = items.indexOf(dragging)
        const targetId = items.indexOf(target)

        if(dragId < targetId){
            list.insertBefore(dragging,target.nextSiblingui)

        }else{
            list.insertBefore(dragging,target)
        }
    }
})

list.addEventListener("drop",(e)=>{
    e.preventDefault()
    dragging.style.opacity = "1"
})



