const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

const handleAdd = () => {
  count++;
  number.innerText = count;
};

const handleMinus = () => {
  count--;
  number.innerText = count;
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
