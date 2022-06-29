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
console.log(routes.filter(({path})=> path == 'zad'));

function App() {
  return (
    <Suspense fallback={<div className='w-screen h-screen box-border flex items-center justify-center'>
      Loading...
    </div>}>
      {useRoutes(routes.filter(({path})=> path == 'zad'))}
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

