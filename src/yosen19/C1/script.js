const input = document.getElementById('input')
const Savebtn = document.getElementById('save')

Savebtn.addEventListener('click',()=>{
    const text = input.value
    const blob = new Blob([text], {type: "text/plain;charset=utf8"});
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a")
    link.href = url
    link.download = "myText.txt"
    link.click()

    URL.revokeObjectURL(url)
})

