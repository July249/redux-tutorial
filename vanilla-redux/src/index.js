import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    count++;
    return (number.textContent = count);
  } else if (action.type === 'MINUS') {
    count--;
    return (number.textContent = count);
  } else {
    return (number.textContent = count);
  }
};
const countStore = createStore(countModifier);

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
