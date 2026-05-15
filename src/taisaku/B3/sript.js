const pages = document.querySelectorAll('.page')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let i = 0

function page(pageid){
    pages.forEach((page,id) => {
        page.classList.remove('active')
        if(id === pageid){
            page.classList.add('active')
        }
    });
}

next.addEventListener('click',()=>{
    i+=1
    page(i)
    if(i >= 6){
        i = 1
    }
})

prev.addEventListener('click',()=>{
    i-=1
    page(i)
    if(i <= 0){
        i = pages.length
    }
})

page(i)
