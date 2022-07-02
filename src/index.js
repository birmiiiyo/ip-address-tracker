import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'GET_IP'
//     return
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
