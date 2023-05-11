import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  // if 문으로 구성한 type 별 동작 방식을 switch 문으로 변경
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
  number.textContent = countStore.getState();
};

countStore.subscribe(handleChange);

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
