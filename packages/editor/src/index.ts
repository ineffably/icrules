import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const container = document.getElementById('app');

if (parseFloat(React.version) < 18) {
  ReactDOM.render(React.createElement(App), container);
}
else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactDom18 = require('react-dom/client');
  ReactDom18.createRoot(container).render(React.createElement(App));
}


