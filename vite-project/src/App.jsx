import './App.css'
import Cards from './RecipeReviewCard'
import Myhome from "./Home";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';
import router from './router';

import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  
  return (
    <>

  {/* <BrowserRouter> */}
  <QueryClientProvider client={queryClient}>
  {/* <Layout>
    <Routes>
      <Route path="/" element={<Myhome/>}/>
      <Route path="/shop" element={<div className='allCardsInIt'><Cards /></div>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/layout" element={<Layout/>}/>
    </Routes>
  </Layout> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  {/* </BrowserRouter> */}
    </>
  )
}

export default App
