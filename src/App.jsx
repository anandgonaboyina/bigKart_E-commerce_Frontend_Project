import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from './components/Tabs/Tabs'
import Home from './Pages/Home';
import Footer from './components/Footer/footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>

            <Route path="/" element={<> <Tabs/><Footer></Footer> </>} replace></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
