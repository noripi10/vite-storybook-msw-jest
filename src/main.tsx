import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { worker } from '../src/__mocks__/msw/browser';

if (import.meta.env.DEV) {
  console.info('worker start!!!');
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
