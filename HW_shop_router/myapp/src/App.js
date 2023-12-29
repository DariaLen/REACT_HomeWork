
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/products/Products';
import ProductCard from './components/productCard/ProductCard';

function App() {


  return (
    <div >
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/product/:id' element={ <ProductCard />}/>

     

        <Route
          path='*'
          element={
            <div>
              <h3>Sorry, page not found</h3>
              <button onClick={() => window.history.back()}>Go Back</button>
            </div>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
