import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer의 역할을 countModifier가 대신한다.
// state의 default를 0으로 설정한다.
const countModifier = (state = 0) => {
  // ... modify state code ...
  return state;
};
// countStore는 count 데이터를 저장하고 있는 장소이다.
const countStore = createStore(countModifier);

// getState는 countStore에 저장된 데이터를 가져온다.
console.log(countStore.getState()); // 0 <- by default setting of state
