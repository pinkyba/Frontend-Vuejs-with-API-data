import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.imgflip.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default{
  getMemes(){
    return apiClient.get('/get_memes') // endpoint name ===> get_memes
  },
  // getItem(id){
  //   return apiClient.get('/items/'+id)
  // },
}