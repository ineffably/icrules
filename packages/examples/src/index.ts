import React from 'react';
import { createRoot } from 'react-dom/client';
import { Examples } from './Examples';
import './examples.css';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Failed to find the root element with id "app"');
}

// Use modern React 18 approach
const root = createRoot(container);
root.render(React.createElement(Examples));
