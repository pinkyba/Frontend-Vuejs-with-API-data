import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default{
  getCategories(){
    return apiClient.get('/categories') // endpoint name ===> get_memes
  },
  getSubcategories(){
    return apiClient.get('/subcategories') // endpoint name ===> get_memes
  },
  getItems(){
    return apiClient.get('/items') // endpoint name ===> get_memes
  },
  getOrders(){
    return apiClient.get('/orders') // endpoint name ===> get_memes
  },
  getBrands(){
    return apiClient.get('/brands') // endpoint name ===> get_memes
  },
  getItemCard(){
    return apiClient.get('/items') // endpoint name ===> get_memes
  },
}