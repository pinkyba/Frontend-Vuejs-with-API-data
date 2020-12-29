<template>
  
  <div class="container">
   
    <h1>Categories</h1>
    <br>
  
    <table class="table border">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category,index) in categories" :key="index">
          <td> {{ index+1 }} </td>
          <td> {{category.name}} </td>
          <td> <img v-bind:src="category.photo" width="100" height=""> </td>
          
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
        categories: null,
        error: false
      }
    },
    created(){
      this.getCategories();

    },
    methods:{
      getCategories(){
        Shoppingservice.getCategories()
        .then(response => {
           //console.log(response.data)
           this.categories = response.data
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      }
    }
  }
</script>
