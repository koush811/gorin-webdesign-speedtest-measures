const lists = document.getElementById('lists')

for(let i = 1; i <= 100; i++){
    const list = document.createElement('li')
    
    if(i % 3 === 0 && i % 5 ===0){
        list.textContent = "FizzBuzz"
    }else if(i % 3 === 0){
        list.textContent = "Fizz"
    }else if(i % 5 === 0){
        list.textContent = "Buzz"
    }else{
        list.textContent = i
    }

    lists.appendChild(list)
}