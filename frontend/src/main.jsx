import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import './index.css'
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Stripe publishable key. Please set VITE_STRIPE_PUBLISHABLE_KEY in your environment variables.');
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={QueryClient}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
