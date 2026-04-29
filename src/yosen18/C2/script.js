const tbody = document.querySelector('tbody')
const addbtn = document.getElementById('add')

addbtn.addEventListener('click',()=>{
    add()
})

function add(){
    const tr = document.createElement('tr')
    const input = document.createElement('input')
    input.type = "number"
    const deletebtn = document.createElement('button')
    deletebtn.classList.add('delete')
    deletebtn.textContent = "削除"

    const td = document.createElement('td')
    td.appendChild(input)
    td.appendChild(deletebtn)

    tr.appendChild(td)
    tbody.appendChild(tr)

    input.addEventListener('input',ave)

    deletebtn.addEventListener('click',()=>{
        
        const trlen = tbody.querySelectorAll('tr').length

        if(trlen > 2){
            tr.remove()
            ave()
        }else{
            alert('削除できません')
        }

    })
}

const aveDisplay = document.getElementById('ave')



function ave(){
    
    const inputs = document.querySelectorAll('input')
    
    let sum = 0
    let count = 0

    inputs.forEach(input => {
        const val = parseFloat(input.value)
        sum += val
        count++ 
    });

    if(sum === 0 || count === 0) return

    const ave = Math.floor(sum / count)

    aveDisplay.textContent = ave
}

add()