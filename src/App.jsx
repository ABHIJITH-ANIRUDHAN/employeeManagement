import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Edit from './pages/edit/Edit'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import PageNotFound from './pages/page-not-found/PageNotFound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/edit/:id' element={<Edit/>}/>
      <Route  path='/profile/:id' element={<Profile/>}/>
      <Route  path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
