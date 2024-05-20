import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@coreui/coreui/dist/css/coreui.min.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
