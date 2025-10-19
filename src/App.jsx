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
      <Navbar basename="/bigKart_E-commerce_Frontend_Project/"></Navbar>
      <Routes>
            <Route path="/bigKart_E-commerce_Frontend_Project/" element={<> <Tabs/><Footer></Footer> </>} replace></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
