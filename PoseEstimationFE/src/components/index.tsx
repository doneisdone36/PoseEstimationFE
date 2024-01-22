import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ClientProvider } from './page/client/provider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ClientProvider/>
    </Router>
  </React.StrictMode>,
)
