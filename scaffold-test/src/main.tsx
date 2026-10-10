import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import all page components for ssgPlugin discovery
import * as HomePageModule from './pages/Home.tsx'
import * as ServicesPageModule from './pages/Services.tsx'
import * as ProductsPageModule from './pages/Products.tsx'
import * as ProductHybridFlooringPageModule from './pages/ProductHybridFlooringPage.tsx'
import * as ProductLaminateFlooringPageModule from './pages/ProductLaminateFlooringPage.tsx'
import * as ProductVinylFlooringPageModule from './pages/ProductVinylFlooringPage.tsx'
import * as AboutPageModule from './pages/About.tsx'
import * as ContactPageModule from './pages/Contact.tsx'

// This ensures page modules are loaded for SSG discovery
const pageModules = [
  HomePageModule,
  ServicesPageModule,
  ProductsPageModule,
  ProductHybridFlooringPageModule,
  ProductLaminateFlooringPageModule,
  ProductVinylFlooringPageModule,
  AboutPageModule,
  ContactPageModule,
]

const rootElement = document.getElementById('root')
if (rootElement && pageModules.length > 0) {
  // During development, render a simple component
  const AppDev = () => (
    <div>
      <h1>ProTrade Solution - Development Mode</h1>
      <p>This site uses SSG. Visit routes directly or use: npm run build</p>
    </div>
  )

  createRoot(rootElement).render(
    <StrictMode>
      <AppDev />
    </StrictMode>,
  )
}
