const logs = document.querySelector('.logs');
const hozon = document.getElementById('hozon');
const textarea = document.getElementById('text');

let isText = false;
let isSaved = false;


textarea.addEventListener('input', () => {
  const text = textarea.value.trim() !== '';
  isText = text;
  isSaved = false;
});

hozon.addEventListener('click', () => {
  isSaved = true;
});

window.addEventListener('beforeunload', (e) => {
  const text = textarea.value.trim() !== '';
  const shouldWarn = text && !isSaved;

  if (!shouldWarn) return;

  e.preventDefault();
  e.returnValue = ' '; 
});