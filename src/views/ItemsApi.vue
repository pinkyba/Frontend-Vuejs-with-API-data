<template>
  
  <div class="container">
    <h1>Items</h1>
    <br>
    <table class="table border">
      <thead>
        <tr>
         
          <th scope="col">Code No</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Discount</th>
          <th scope="col">Description</th>
          <th scope="col">Photo</th>
          <th scope="col">Brand</th>
          <th scope="col">Subcategory</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in items" :key="index">

          <td> {{item.codeno}} </td>          
          <td> {{item.name}} </td>
          <td> {{item.price}} Ks </td>
          <td> {{item.discount}} Ks </td>
          <td> {{item.description}} </td>
          <td> <img v-bind:src="item.photo" width="100" height=""> </td>
          <td> {{item.brand.name}} </td>
          <td> {{item.subcategory.name}} </td>
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
        items: null,
        error: false
      }
    },
    created(){
      this.getItems();
    },
    methods:{
      getItems(){
        Shoppingservice.getItems()
        .then(response => {
           console.log(response.data)
           this.items = response.data
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      }
    }
  }
</script>
