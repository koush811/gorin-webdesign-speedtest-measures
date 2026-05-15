const home = document.querySelector('.home')
const pro = document.querySelector('.pro')
const skill = document.querySelector('.skill')
const ask = document.querySelector('.ask')
const hometab = document.querySelector('.home-tab')
const protab = document.querySelector('.pro-tab')
const skilltab = document.querySelector('.skill-tab')
const asktab = document.querySelector('.ask-tab')

home.style.display = "block"
pro.style.display = "none"
skill.style.display = "none"
ask.style.display = "none"
hometab.style.color = "red"

hometab.addEventListener('click',()=>{
    home.style.display = "block"
    pro.style.display = "none"
    skill.style.display = "none"
    ask.style.display = "none"
    hometab.style.color = "red"
    protab.style.color = "black"
    skilltab.style.color = "black"
    asktab.style.color = "black"
})

protab.addEventListener('click',()=>{
    home.style.display = "none"
    pro.style.display = "block"
    skill.style.display = "none"
    ask.style.display = "none"
    hometab.style.color = "black"
    protab.style.color = "black"
    protab.style.color = "red"
    skilltab.style.color = "black"
    asktab.style.color = "black"
})

skilltab.addEventListener('click',()=>{
    home.style.display = "none"
    pro.style.display = "none"
    skill.style.display = "block"
    ask.style.display = "none"
    hometab.style.color = "black"
    skilltab.style.color = "black"
    protab.style.color = "black"
    skilltab.style.color = "red"
    asktab.style.color = "black"
})

asktab.addEventListener('click',()=>{
    home.style.display = "none"
    pro.style.display = "none"
    skill.style.display = "none"
    ask.style.display = "block"
    asktab.style.color = "clack"
    hometab.style.color = "black"
    protab.style.color = "black"
    skilltab.style.color = "black"
    asktab.style.color = "red"
})
