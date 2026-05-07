const items = document.querySelector('.items')
let colorid = 'black'

for (let i = 0; i < 256; i++) {
    const li = document.createElement('div')
    li.classList.add('item')
    items.appendChild(li)

    li.addEventListener('click', () => {
        li.style.backgroundColor = colorid
    })
}

function color(el, color) {
    colorid = color
    const picks = document.querySelectorAll('.pick')
    picks.forEach(p => p.classList.remove('selected'))
    if (el && el.classList) el.classList.add('selected')
}