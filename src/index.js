import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <SimpleReactLightbox>
        <App />
    </SimpleReactLightbox>
    </BrowserRouter>
);

