import { useEffect, useState } from "react"
import * as instance from './repository/coffeRepository'
import NavBarComponent from "./components/NavBarComponent"
import Product from "./model/product"
import CardComponent from "./components/CardComponent"

function App() {
  const [ products, setProducts ] = useState<Product[]>([])

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    const response = await instance.GetAllProducts()
    setProducts(response)
  }

  return (
    <>
    <NavBarComponent />
      <h1 className="text-center">Hello world!</h1>
      {
        products.map((item) => {
          return(
            <CardComponent data={item} />
          )
        })
      }
    </>
  )
}

export default App
