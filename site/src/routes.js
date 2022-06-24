import { BrowserRouter, Routes, Route } from "react-router-dom";


import Pet from './pages/pet'
import Cadastrar from './pages/home.js'

export default function Index(){
   return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Pet/>} />
        <Route path="/cadastrar" element={<Cadastrar/>} />
    </Routes>
    </BrowserRouter>


   ) 
}
