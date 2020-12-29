<template>
  
  <div class="container">
    <h1>Orders</h1>
    <br>
    <table class="table border">
      <thead>
        <tr>
         
          <th scope="col">Code No</th>
          <th scope="col">Order date</th>
          <th scope="col">Total</th>
          <th scope="col">Status</th>
          <th scope="col">User</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order,index) in orders" :key="index">

          <td> {{order.codeno}} </td>          
          <td> {{order.orderdate}} </td>
          <td> {{order.total}} </td>
          <td> {{order.status}} </td>
          <td> {{order.user_id.name}} </td>
          
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
        orders: null,
        error: false
      }
    },
    created(){
      this.getOrders();
    },
    methods:{
      getOrders(){
        Shoppingservice.getOrders()
        .then(response => {
           console.log(response.data)
           this.orders = response.data
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      }
    }
  }
</script>
