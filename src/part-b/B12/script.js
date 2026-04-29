const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    
    const targetId = link.getAttribute("href")
    const target = document.querySelector(targetId)

    if(target){
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    links.forEach((item) => item.classList.remove('click'))
    link.classList.add('click')
  });
});