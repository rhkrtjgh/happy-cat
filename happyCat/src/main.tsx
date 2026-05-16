import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/responsive.css'
import App from './App.tsx'
import { applyPuddingThemeToDocument, getCurrentPuddingTheme } from './theme/puddingTheme'

applyPuddingThemeToDocument(getCurrentPuddingTheme())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
