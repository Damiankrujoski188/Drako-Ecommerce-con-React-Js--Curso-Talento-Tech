import './App.css'
import { Routes, Route} from "react-router-dom";
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Carrito } from './components/Carrito/Carrito';
import { FormContainer } from './components/Form/FormContainer';
// import { ItemDetailContainer } from './components/ItemDetail/ItemDetail';

function App() {

  return (
    <>
      
      <Header/>
      <main className='app'>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path= "/carritoProductos" element={<Carrito/>}/>
          <Route path= "/contacto" element={<FormContainer/>}/>
          <Route path= "/producto/:idItem" element={<ItemDetailContainer/>}/>
        </Routes>
      </main>     
      <Footer/>
    </>
  )
}

export default App 
