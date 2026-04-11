const list = document.getElementById('lists');
const result = document.getElementById('result');
let dragging = null;

function bindDragEvents() {
  const items = list.querySelectorAll('li');

  items.forEach((item) => {
    item.addEventListener('dragstart', () => {
      dragging = item;
      item.classList.add('drag');
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('drag');
      dragging = null;
      update();
    });
  });
}

function update() {
  const order = [];
  const lists = list.querySelectorAll('li');

  lists.forEach((item) => {
    order.push(item.textContent.trim());
  });

  result.textContent = `現在の順番：${order.join(' → ')}`;
}

list.addEventListener("dragover", (e) => {
  e.preventDefault();

  const afterElement = getDragAfterElement(list, e.clientY);
  if (!dragging) {
    return;
  }

  if (afterElement == null) {
    list.appendChild(dragging);
  } else {
    list.insertBefore(dragging, afterElement);
  }
});

list.addEventListener("drop", (e) => {
  e.preventDefault();
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll("li:not(.drag)")
  ];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

bindDragEvents();
update();