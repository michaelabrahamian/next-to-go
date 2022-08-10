import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { RenderWithProviders } from './components/RenderWithProviders/RenderWithProviders';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RenderWithProviders>
      <App />
    </RenderWithProviders>
  </React.StrictMode>
);
