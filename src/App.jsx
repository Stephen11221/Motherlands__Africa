import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import DestinationsPage from './pages/DestinationsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import StaysPage from './pages/StaysPage.jsx'
import VehiclesPage from './pages/VehiclesPage.jsx'

function App() {
  const [page, setPage] = useState('home')

  const pages = {
    home: <HomePage setPage={setPage} />,
    stays: <StaysPage />,
    vehicles: <VehiclesPage />,
    destinations: <DestinationsPage />,
  }

  return (
    <div className="site">
      <Header page={page} setPage={setPage} />
      {pages[page] ?? pages.home}
      <Footer setPage={setPage} />
    </div>
  )
}

export default App
