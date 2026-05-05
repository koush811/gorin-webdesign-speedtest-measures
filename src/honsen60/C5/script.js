const tbody = document.querySelector('tbody')
const addbtn = document.getElementById('add')
const ave = document.getElementById('ave')

function average() {
    const inputs = tbody.querySelectorAll('input[type="number"]')
    let total = 0

    inputs.forEach((input) => {
        total += Number(input.value || 0)
    })

    ave.textContent = inputs.length ? (total / inputs.length) : 0
}

tbody.addEventListener('input', (e) => {
    if (e.target.matches('input[type="number"]')) {
        average()
    }
})

addbtn.addEventListener('click', () => {
    const tr = document.createElement('tr')
    const td = document.createElement('td')

    const input = document.createElement('input')
    input.type = 'number'
    td.appendChild(input)

    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'delete'
    deletebtn.addEventListener('click', () => {
        const trs = document.querySelectorAll('tbody tr')

        if(trs.length !== 1){
            tr.remove()
            average()
        }
    })
    td.appendChild(deletebtn)

    tr.appendChild(td)
    tbody.appendChild(tr)

    average()
})

average()