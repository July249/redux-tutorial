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

const handleChange = () => {
  // 버튼이 클릭될 때마다 로그가 출력된다.
  console.log('there was a change on the store');
};

// subscribe는 store의 변화를 감지한다.
// 해당 변화가 감지되면 subscribe에 등록된 함수를 실행한다.
countStore.subscribe(handleChange);

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
