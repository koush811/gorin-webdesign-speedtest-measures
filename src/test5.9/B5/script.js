// script.js
const topbtn = document.getElementById('topbtn')

// スクロール時にボタンの表示/非表示を判定
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight

    // ページ最下部に到達したら表示（余裕を持たせて50px手前で判定）
    if (scrollTop + windowHeight >= docHeight - 50) {
        topbtn.classList.add('show')
    } else {
        topbtn.classList.remove('show')
    }
})

// ボタンクリックでトップへ移動
topbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})