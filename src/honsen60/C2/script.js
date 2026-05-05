const list = document.querySelector('ul')
const answer = document.getElementById('answer')

const nums = ['1','2','3','4','5']
let total = 0

function check(){
    nums.forEach(num => {
        const li = document.createElement('li')
        li.textContent = num
        list.append(li)
        if(Number(num)%2 !== 0){
            const dev = num * num
            total = total + dev
        }
    });
    answer.textContent = total

}

check()