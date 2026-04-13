const fields = document.querySelectorAll('.field')

const nameInput =document.getElementById('name')
const mailInput =document.getElementById('mail')
const passInput =document.getElementById('pass')

const togglebtn = document.getElementById('toggle')

const nameError = document.getElementById('nameError')
const mailError = document.getElementById('mailError')
const passError = document.getElementById('passError')

const inputs = [nameInput,mailInput,passInput]

function active(input){
    fields.forEach(field => {
        if (document.activeElement === input || input.value.trim() !== "") {
        field.classList.add("active");
      } else {
        field.classList.remove("active");
      }
    });
}

function validatename(){
    if(nameInput.value === ""){
        nameError.textContent = "名前を入力してください"
    }else{
        nameError.textContent === ""
    }
}

function validatepass(){
    if(passInput.value === ""){
        passError.textContent = "パスワードを入力してください"
    }else{
        passError.textContent === ""
    }
}

function validateMail(){
    const mail = mailInput.value
    const RGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(mail === ""){
        mailError.textContent = "メールアドレスを入力してください"
    }else if(!RGX.test(mail)){
        mailError.textContent = "形式エラー"
    }else{
        mailError.textContent = ""
    }
}

inputs.forEach(input => {
    input.addEventListener('focus',()=>{
        active(input)
    })
    input.addEventListener('input',()=>{
        active(input)
    })
});

nameInput.addEventListener("blur", () => {
    active(nameInput)
    validatename()
});
mailInput.addEventListener("blur", () => {
    active(mailInput)
    validateMail()
});
passInput.addEventListener("blur", () => {
    active(passInput)
    validatepass()
});

togglebtn.addEventListener("click",()=>{
    if(togglebtn.textContent === "非表示"){
        passInput.type = "password"
        togglebtn.textContent = "表示"
    }else if(togglebtn.textContent === "表示"){
        passInput.type = "text"
        togglebtn.textContent = "非表示"
    }
})

