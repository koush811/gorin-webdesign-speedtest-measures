const arphaInput = document.getElementById('alpha')
const betaInput = document.getElementById('beta')
const gammaInput = document.getElementById('gamma')

window.addEventListener('deviceorientation',()=>{
    
})

function update(alpha,bete,gamma){
    const a = Number(alpha || 0)
    const b = Number(bete || 0)
    const g = Number(gamma || 0)

    arphaInput.textContent = a.toFixed(1)
    betaInput.textContent = b.toFixed(1)
    gammaInput.textContent = g.toFixed(1)    
}