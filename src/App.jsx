import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => { 

  return (
  <>

  <BrowserRouter>

    <NavBar/>
    
    <Routes> 
      <Route exact path= "/" element= {<Home/>} />
      <Route exact path= "/categorias/:categoria" element= {<ItemListContainer/>} />
      <Route exact path= "/item/:id" element= {<ItemDetailContainer/>} />
    </Routes>

    <Footer/>

  </BrowserRouter>
  
  </>
  )
}

export default App
