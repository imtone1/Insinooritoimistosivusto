import React from 'react'
import { hydrate, render } from 'react-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'


const APP = (<BrowserRouter>
  <App />
</BrowserRouter>)

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement)
} else {
  render(APP, rootElement)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
