import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer의 역할을 countModifier가 대신한다.
// state의 default를 0으로 설정한다.
// state는 곧 count에 해당한다.
const countModifier = (count = 0, action) => {
  // action.type에 따라 처리해야할 동작사항에 달라진다.
  // action.type으로 ADD를 전달한다.
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};
// countStore는 count 데이터를 저장하고 있는 장소이다.
const countStore = createStore(countModifier);

countStore.dispatch({ type: 'ADD' }); // countStore에 type을 전달하는 역할을 dispatch가 한다.
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });

console.log(countStore.getState()); // 2가 출력되는 것을 확인할 수 있다.
