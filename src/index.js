import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss'
import './style.scss';
import App from './App';
import 'flowbite/src/themes/default.css';
import 'flowbite';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const initialStore = {
  score: 0
}
const reducer = (currentStore = initialStore, action) => {
  console.log(action);
  if(action.type == "increment") {
    return { ...currentStore, score: currentStore.score + action.value }
  } else if(action.type == "decrement") {
    return { ...currentStore, score: currentStore.score - action.value }
  }
  return currentStore;
}
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
