const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver((entries, id)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active")
            id.unobserve(entry.target)
        }
    })
},{
    threshold: 0.5,//要素が５０％みえたら
    }
)

cards.forEach((card)=>{
    observer.observe(card)
})