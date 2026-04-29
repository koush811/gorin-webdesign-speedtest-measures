const text = document.getElementById('text');
const serch = document.querySelector('.serch')

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        text.textContent = '保存しました';
    } else if (e.ctrlKey && e.key === 'z') {
        e.preventDefault();
        text.textContent = '1つ戻りました';
    } else if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        serch.classList.toggle('hide')
    }
});

