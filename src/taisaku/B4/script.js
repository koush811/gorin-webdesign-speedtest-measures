const items = document.querySelectorAll('.item')
const start = document.getElementById('start')

start.addEventListener('click', () => {
    start.disabled = true
    run()
})

let i = 0

function run() {
    const el = items[i]
    el.classList.add("active")

    el.addEventListener('animationend',function handle() {
        el.removeEventListener('animationend', handle)
        i++
        run()
    })
}