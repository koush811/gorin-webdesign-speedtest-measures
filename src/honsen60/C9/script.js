const nums = document.querySelector('.nums')

for(i = 1; i <= 100; i++){
    const num = document.createElement('div')

    if(i % 15 === 0){
        num.textContent = 'FizzBuzz'
    }else if(i % 5 ===0){
        num.textContent = 'Fizz'
    }else if(i % 3 ===0){
        num.textContent = 'Buzz'
    }else{
        num.textContent = i
    }
    
    nums.appendChild(num)
}