import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/UI/Loader/Loader.jsx'
import App from './App.jsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

import './index.scss'


if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fullback={<Loader />}>
      {/* <Routes>
        <Route path={'/*'} element={<App />} />
      </Routes> */}
      <App />
    </Suspense>
  </BrowserRouter>
)
