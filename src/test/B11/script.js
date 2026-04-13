const text = document.getElementById('text')

const debouncecheck = debounce(sizecheck,300)

window.addEventListener('resize',()=>{
    debouncecheck()
      
})

function sizecheck(){
    const width = window.innerWidth
    const height = window.innerHeight
    let size
    if(width < 600){
        size = "xs"
    }else if(width < 700){
        size = "sm"
    }else if(width < 800){
        size = "md"
    }else if(width < 900){
        size = "lg"
    }else if(width < 1000){
        size = "xl"
    }

    text.textContent = `幅${width} 高さ${height} サイズ${size}`
  
}

function debounce(func,delay){
    let timeoutID
    return function(...args){
        clearTimeout(timeoutID)
        timeoutID = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}