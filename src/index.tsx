import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./Redux/store"
import { Provider } from 'react-redux';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

