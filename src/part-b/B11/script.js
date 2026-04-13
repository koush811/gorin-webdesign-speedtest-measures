const display = document.getElementById('display')

window.addEventListener('resize',()=>{
    const width = window.innerWidth
    const height = window.innerHeight
    let size = ""

    if(width < 200){
        size = "xs"
    }else if(width < 400){
        size = "sm"
    }else if(width < 600){
        size = "md"
    }else if(width < 800){
        size = "lg"
    }else if(width < 1000){
        size = "xl"
    }

    display.textContent = `幅:${width} 高さ:${height} サイズ:${size}`
})