import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Bannar from './Components/Bannar/Bannar'
import Contact from './Components/Contact/Contact'
import Navigation from './Components/Navogation/Navigation'
import Services from './Components/Services/Services'

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/bannar" element={<Bannar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App
