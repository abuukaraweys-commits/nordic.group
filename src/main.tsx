import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ClerkProvider } from '@clerk/react';
import App from './App.tsx';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY - lägg till den i din .env-fil');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: '#2c8fa0',       // Er turkosa accentfärg (knappar, länkar, fokus-ram)
          colorText: '#1a3a42',           // Mörk text, matchar sajtens brödtext
          colorBackground: '#ffffff',     // Vit bakgrund på själva popup-rutan
          colorInputBackground: '#f8f9fa',// Ljusgrå bakgrund i textfälten
          colorInputText: '#1a3a42',
          borderRadius: '0.5rem',         // Måttligt rundade hörn, matchar knapparna i headern
        },
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>,
);
