
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './views/HomeScreen'
import MenuApp from './components/MenuApp'

const App = () => {
  return (
   <BrowserRouter>
   <MenuApp />
   <Routes>
    <Route path='/' element={<HomeScreen />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App