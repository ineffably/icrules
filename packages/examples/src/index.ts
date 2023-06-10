import React from 'react';
import ReactDOM from 'react-dom';
import { Examples } from './Examples';

const container = document.getElementById('app');
const element = React.createElement(Examples);

if (parseFloat(React.version) < 18) {
  // `as any` due to using 18 locally
  (ReactDOM as any).render(element, container);
}
else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactDom18 = require('react-dom/client');
  ReactDom18.createRoot(container).render(element);
}
