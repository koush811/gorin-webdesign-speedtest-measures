const imgs = document.querySelectorAll('img')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const num = document.getElementById('num')

let i = 0
num.textContent = `${i+1}番`

setInterval(()=>{
    move()
},5000)


function move(){
    i+=1
    if(i >= imgs.length){
        i = 0
    }
    page(i)
    num.textContent = `${i+1}番`
}

function page(id){
    imgs.forEach((img,key) => {
        img.classList.remove('active')
        if(id === key){
            img.classList.add('active')
        }
    });
}

next.addEventListener('click',()=>{
    i += 1
    if(i >= imgs.length){
        i = 0
    }
    console.log(i)
    page(i)
    num.textContent = `${i+1}番`
})

prev.addEventListener('click',()=>{
    i -= 1
    if(i < 0){
        i = imgs.length -1
    }
    console.log(i)
    page(i)
    num.textContent = `${i+1}番`
})

page(i)



    

