import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  // 하기의 if문 안에서는 textContent를 직접적으로 count로 갱신하고 있다.
  // 하지만 subscribe를 이용하면 최신의 count 값을 가져오게 할 수 있다.
  // 매번 if 문 안에 return (number.textContent = count); 를 적어주는 것은 번거롭다.
  if (action.type === 'ADD') {
    return count + 1;
    // count++;
    // return (number.textContent = count);
  } else if (action.type === 'MINUS') {
    return count - 1;
    // count--;
    // return (number.textContent = count);
  } else {
    return count;
    // return (number.textContent = count);
  }
};
const countStore = createStore(countModifier);

const handleChange = () => {
  console.log(countStore.getState()); // 버튼이 클릭될 때마다 store의 상태를 출력한다.
  number.textContent = countStore.getState(); // store의 상태를 가져와서 textContent를 갱신한다.
};

// subscribe는 store의 변화를 감지한다.
// 해당 변화가 감지되면 subscribe에 등록된 함수를 실행한다.
countStore.subscribe(handleChange);

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
