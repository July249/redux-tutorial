import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer의 역할을 countModifier가 대신한다.
// state의 default를 0으로 설정한다.
// state는 곧 count에 해당한다.
const countModifier = (count = 0, action) => {
  console.log('action', action); // { type: 'HELLO' }
  return count;
};
// countStore는 count 데이터를 저장하고 있는 장소이다.
const countStore = createStore(countModifier);

countStore.dispatch({ type: 'HELLO' }); // -> the way to send message to reducer
