function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector(".input");
const create = document.querySelector(".create");
const destroy = document.querySelector(".destroy");
const boxes = document.querySelector("#boxes");


create.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    return;
  }
});

function createBoxes(amount) {
  boxes.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
}

destroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});
