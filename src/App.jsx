import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Preloading from './components/PreLoading/PreLoading'
import AppRoutes from './AppRoutes'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4000) // simula o loading de 4s

    // limpe o timeout quando o componente for desmontado
    return () => clearTimeout(timeout)
  }, [loading])

  return (
    <div className="App">
      <Router>
        {loading ? <Preloading /> : <AppRoutes />}
      </Router>
    </div>
  )
}

export default App
