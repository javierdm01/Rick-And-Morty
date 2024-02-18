import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Layout } from './components/Layout'
import { Episodes } from './components/Episodes'
import { Actors } from './components/Actors'
import { Home } from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
            <Route path='/episodes' element={<Episodes/>}/>
            <Route path='/actors' element={<Actors/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
)
