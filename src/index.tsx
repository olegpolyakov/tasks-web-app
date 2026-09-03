import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import http from '@olegpolyakov/frontend/clients/http';

import App from './app';

import './index.scss';

http.setBaseUrl(import.meta.env.VITE_API_URL);

createRoot(document.getElementById('root')!).render(
    <Router>
        <App />
    </Router>
);