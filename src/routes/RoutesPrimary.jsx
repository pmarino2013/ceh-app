import {Routes, Route} from 'react-router-dom'
import HomeScreen from '../views/HomeScreen'

const RoutesPrimary = () => {
  return (
  <Routes>
    <Route path='/' element={<HomeScreen />} />
  </Routes>
  )
}

export default RoutesPrimary