import { Routes, Route, Outlet, Link } from 'react-router-dom'

import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Settings from './Pages/Settings/Settings'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default Router
