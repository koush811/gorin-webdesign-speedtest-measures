const lists = document.querySelectorAll('li')
let num = 0
lists.forEach(list => {
    num += Number(list.textContent)
});

document.getElementById('calc').textContent = `合計:${num}`