import { BrowserRouter, Route, Routes } from 'react-router'
import { MainView } from './routes/main/MainView'
import { Login } from './routes/login/Login'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
