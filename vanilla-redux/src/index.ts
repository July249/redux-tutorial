import { createStore } from 'redux';

type action = {
  type: 'ADD' | 'MINUS';
};

const add = document.getElementById('add') as HTMLButtonElement;
const minus = document.getElementById('minus') as HTMLButtonElement;
const number = document.querySelector('span') as HTMLSpanElement;

const countModifier = (count = 0, action: action) => {
  switch (action.type) {
    case 'ADD':
      return count + 1;
    case 'MINUS':
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const handleChange = () => {
  console.log(countStore.getState());
  number.textContent = countStore.getState().toString();
};

countStore.subscribe(handleChange);

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
