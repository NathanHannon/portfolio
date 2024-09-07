import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { register as registerServiceWorker } from './serviceWorkerRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import './index.scss';

// use root.render() instead of ReactDOM.render()
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
