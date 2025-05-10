import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './assets/styles/index.css';
import {AppProviders} from './AppProviders';


//
// import { registerSW } from 'virtual:pwa-register';
//
// registerSW();


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProviders>
            <App/>
        </AppProviders>
    </React.StrictMode>
);
