<template>
  
  <div class="container">
    <h1>Brands</h1>
    <br>
    <table class="table border">
      <thead>
        <tr>
         
          <th scope="col">Name</th>
          <th scope="col">Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(brand,index) in brands" :key="index">

          <td> {{brand.name}} </td>
          <td> <img v-bind:src="brand.photo" width="100" height=""> </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/javascript">
  import Shoppingservice from '@/services/Shoppingservice.js'
  
  export default {
    data(){
      return {
        brands: null,
        error: false
      }
    },
    created(){
      this.getBrands();
    },
    methods:{
      getBrands(){
        Shoppingservice.getBrands()
        .then(response => {
           //console.log(response.data)
           this.brands = response.data
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      }
    }
  }
</script>
