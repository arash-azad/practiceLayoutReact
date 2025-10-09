import './App.css'
import Cards from './RecipeReviewCard'
import Myhome from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';

function App() {
  return (
    <>
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<Myhome/>}/>
      <Route path="/shop" element={<div className='allCardsInIt'><Cards /></div>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/layout" element={<Layout/>}/>
    </Routes>
  </Layout>
  </BrowserRouter>
    </>
  )
}

export default App
