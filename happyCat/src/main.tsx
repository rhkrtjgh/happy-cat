import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/responsive.css'
import App from './App.tsx'
import { applyPuddingThemeToDocument, getCurrentPuddingTheme } from './theme/puddingTheme'
import { assetUrl } from './utils/assetUrl'

applyPuddingThemeToDocument(getCurrentPuddingTheme())
document.documentElement.style.setProperty(
  '--app-bg-image',
  `url("${assetUrl('images/background.png')}")`,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
