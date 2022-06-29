import { StrictMode, Suspense } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'

import './assets/base.less';

import 'pace-js'
import 'pace-js/themes/silver/pace-theme-minimal.css'

import routes from '~react-pages'

// eslint-disable-next-line no-console
console.log(routes.filter(({path})=> !path))

function App() {
  return (
    <Suspense fallback={<div className='bg-white w-screen h-screen box-border flex items-center justify-center'>
      Loading...
    </div>}>
      {useRoutes(routes.filter(({path})=> !path))}
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)

