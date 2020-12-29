<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand ml-4" href="#">Ecommence API</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-5" style="margin-left: 35rem !important;">
          <li class="nav-item active pr-2">
            <a class="nav-link" ><router-link to="/">Home</router-link> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item pr-2">
            <a class="nav-link" ><router-link to="/categories">Category</router-link></a>
          </li>
          <li class="nav-item pr-2">
            <a class="nav-link" href="#"><router-link to="/subcategories">Subcategory</router-link></a>
          </li>
          <li class="nav-item pr-2">
            <a class="nav-link" href="#"><router-link to="/brands">Brand</router-link></a>
          </li>
          <li class="nav-item pr-2">
            <a class="nav-link" href="#"><router-link to="/items">Item</router-link></a>
          </li>
          <li class="nav-item pr-2">
            <a class="nav-link" href="#"><router-link to="/orders">Order</router-link></a>
          </li>
          <li class="nav-item pr-2">
            <a class="nav-link" href="#"><router-link to="/itemcard">Item Card</router-link></a>
          </li>
          
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->

        </ul>
      </div>
    </nav>
    <br><br><br>
    
    <router-view/>
  </div>
</template>

<!-- <script type="text/javascript">
  import ItemCard from '@/views/ItemCardApi.vue'
  
  export default {
    data(){
      return {
        quantity: null,
        error: false
      }
    },
    created(){
      this.cartNoti();
    },
    methods:{
      cartNoti(){
        ItemCard.cartNoti()
        .then(response => {
           console.log(response)
           
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      },

    }
  }
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
