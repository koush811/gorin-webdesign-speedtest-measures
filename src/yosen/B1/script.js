const pages = document.querySelectorAll('.page')

let num = 1

document.getElementById('next').addEventListener('click',()=>{
    num++
    if(num > pages.length){
        num = 1
    }
    update()
    console.log(num)
})

document.getElementById('prev').addEventListener('click',()=>{
    num--
    if(num < 1){
        num = pages.length
    }
    update()
    console.log(num)
})

function update(){
    pages.forEach((page,i) => {
        page.classList.remove('active')
        if(num-1 === i){
            page.classList.add('active')
        }
    });
}

update()