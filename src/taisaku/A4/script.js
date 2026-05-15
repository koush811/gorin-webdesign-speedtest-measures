const boxs = document.querySelectorAll('.box')

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
})

boxs.forEach((box)=>{
    observer.observe(box)
})