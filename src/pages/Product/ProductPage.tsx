import NavBarComponent from "../../components/NavBarComponent"
import { useEffect, useState } from "react"
import * as instance from '../../repository/coffeRepository'
import Product from "../../model/product"
import CardComponent from "../../components/CardComponent"


const ProductPage = () => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await instance.GetAllProducts()
    setProducts(response)
  }

  return(
    <div>
      <NavBarComponent />
      {
        products.map((item) => {
          return(
            <div id={item.id.toString()} key={item.id}>
              <CardComponent data={item} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductPage