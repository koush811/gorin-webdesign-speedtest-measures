const ul = document.querySelector('ul')

for(i = 1; i<=100;i++){
    const li =document.createElement('li')
    if(i % 15 === 0){
        li.textContent = "FizzBuzz"
    }else if(i % 5 ===0){
        li.textContent = "Buzz"
    }else if(i % 3 === 0){
        li.textContent = "Fizz"
    }else{
        li.textContent = i
    }
    ul.appendChild(li)
}