import React from 'react'
import App from '../App';
import Home from '../pages/home';
import About from '../pages/about';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function index() {
  return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
</BrowserRouter>
  )
}
