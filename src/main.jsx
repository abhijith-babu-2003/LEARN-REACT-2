import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Parent from './SiblingComponent/Parent.jsx'

createRoot(document.getElementById('root')).render(
<>
<App/>
<Parent/>
</>
)
