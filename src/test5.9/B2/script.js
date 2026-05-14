const lists = document.querySelectorAll('li')
const input = document.getElementById('input')

input.addEventListener('input',()=>{
    lists.forEach(li => {
        if(input.value === ""){
            li.style.display = "block"
        }else{
            li.style.display = "none"
        }
        if(li.textContent.includes(input.value) ){
            li.style.display = "block"
        }
    });
})

    
