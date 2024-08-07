import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'

function App() {
 const [ products ] = useState(initialProducts)
 const [ filters, setFilters ] = useState({
   category: 'all', 
   minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category
      )
    )})
  }

  return (
    <>
    <h1>Hola munbo</h1>
    <Products products={filterProducts}/>
    </>
  )
}

export default App
