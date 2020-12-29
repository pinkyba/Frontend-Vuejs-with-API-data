<template>
  
  <div class="container">
    <h1>Subctegories</h1>
    <br>
    <table class="table border">
      <thead>
        <tr>
         
          <th scope="col">No</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(subcategory,index) in subcategories" :key="index">
          <td> {{ index+1 }} </td>
          <td> {{subcategory.name}} </td>
          
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
        subcategories: null,
        error: false
      }
    },
    created(){
      this.getSubcategories();
    },
    methods:{
      getSubcategories(){
        Shoppingservice.getSubcategories()
        .then(response => {
           //console.log(response.data)
           this.subcategories = response.data
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      }
    }
  }
</script>
