import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/responsive.css'
import App from './App.tsx'
import { applyPuddingThemeToDocument, getCurrentPuddingTheme } from './theme/puddingTheme'
import { assetUrl } from './utils/assetUrl'
import { preloadCatImages } from './utils/preloadCatImages'
import { catHeroImageSources } from './data/catInteractions'
import { pruneOldDailyRecords } from './utils/storage'

applyPuddingThemeToDocument(getCurrentPuddingTheme())
pruneOldDailyRecords()
document.documentElement.style.setProperty(
  '--app-bg-image',
  `url("${assetUrl('images/background.png')}")`,
)

void preloadCatImages(catHeroImageSources)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
