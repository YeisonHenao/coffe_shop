import instance from "./instance";

async function GetAllProducts() {
  try {
    const response = await instance.get('api')
    return response.data
  } catch(err){
    console.error(err)
  } 
}

async function GetProductById(id: string){
  try{
    const response = await instance.get(`/api/${id}`)
    return response.data
  } catch (err) {
    console.error(err)
  } 
}

export {
  GetAllProducts,
  GetProductById
}