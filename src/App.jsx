
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './views/HomeScreen'
import MenuApp from './components/MenuApp'
import LoginScreen from './views/LoginScreen'

const App = () => {
  return (
   <BrowserRouter>
   <MenuApp />
   <Routes>
    <Route path='/' element={<HomeScreen />} />
    <Route path='/login' element={<LoginScreen />} />

   </Routes>
   </BrowserRouter>
  )
}

export default App