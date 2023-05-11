import { FormEvent } from 'react';
import { createStore } from 'redux';

type actionType = {
  type: 'ADD_TODO' | 'DELETE_TODO';
  text?: string;
  id?: number;
};
type toDoObj = {
  text?: string;
  id?: number;
};

interface stateType {
  toDos: Array<toDoObj>;
}

const form = document.querySelector('form') as HTMLFormElement;
const input = document.querySelector('input') as HTMLInputElement;
const ul = document.querySelector('ul') as HTMLUListElement;

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text: string) => {
  store.dispatch({
    type: ADD_TODO,
    text,
  });
};

const deleteToDo = (e: FormEvent) => {
  const id = parseInt(e.target?.parentNode?.id);
  store.dispatch({ type: DELETE_TODO, id });
};

const reducer = (state: stateType = [], action: actionType) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((todo) => todo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  const todos = store.getState() as toDoObj[];
  ul.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', (e: FormEvent) => deleteToDo(e));
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e: FormEvent) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  addToDo(toDo);
};

form.addEventListener('submit', (e) => onSubmit(e));
