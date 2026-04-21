const input = document.getElementById('input')
const display = document.getElementById('display')
const lists = document.querySelectorAll('#list')

let displaylists = [];

input.addEventListener('input',()=>{
    const key = input.value.trim().toLowerCase()

    lists.forEach((list)=>{
        const text = list.textContent.toLowerCase();
        if(key === text || text.includes(key)){
            list.style.display = "block"
        }else{
            list.style.display = "none"
        }
    })
})