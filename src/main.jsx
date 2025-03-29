import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Top from './components/Top'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top/>
    <App />
  </StrictMode>,
)
