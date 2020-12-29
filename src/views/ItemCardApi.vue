<template>
  
  <div class="container">

    <p class="pr-4 pl-3 py-2 bg-light" style=" margin-left: 70rem; border-radius: 30px;"> {{quantity}} 
    </p>

    <div class="row">
      <div class="col" v-for="(item,index) in items" :key="index">
        <div>
          <b-card
            v-bind:title="item.name"
            v-bind:img-src="item.photo"
            img-height=260px
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; height: 28rem;"
            class="mb-2"
          >
            <b-card-text v-if="item.discount">
              <p> Price:  {{item.discount}} Ks <br> <del> {{item.price}} Ks</del></p>
              
            </b-card-text>

            <b-card-text v-if="!item.discount">
              <p class="card-text">Price: {{item.price}} Ks</p>
              
            </b-card-text>
            
            <button variant="info" v-on:click="addtocart(item)">Add to Cart</button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script type="text/javascript">
  import Shoppingservice from '@/services/Shoppingservice.js'
  
  export default {
    data(){
      return {
        items: null,
        quantity: null,
        error: false
      }
    },
    created(){
      this.cartNoti();
      this.getItemCard();
    },
    methods:{
      getItemCard(){
        Shoppingservice.getItemCard()
        .then(response => {
           console.log(response.data)
           this.items = response.data
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      },

      addtocart(item) {        
        var qty = 1;
        var item_id = item.item_id;

        var itemList = {
          item_id: item_id,
          photo: item.photo,
          name: item.name,
          codeno: item.codeno,
          price: item.price,
          discount: item.discount,
          qty: qty
        }

        var cart = localStorage.getItem('cart');
        var cartArray;

        if(cart == null){
          cartArray = [];
        }else{
          cartArray = JSON.parse(cart);
        }

        var status = false;
        for(var i=0; i<cartArray.length; i++){
          if(cartArray[i].item_id == item_id){
            cartArray[i].qty ++;
            status = true;
          }
        }

        if(!status){
          cartArray.push(itemList);
        }

        var cartJson = JSON.stringify(cartArray);
        localStorage.setItem('cart', cartJson);

        this.cartNoti();

      },

      cartNoti(){
        var cart = localStorage.getItem('cart');

        if(cart){
          var cartArray = JSON.parse(cart);
          var notiCount = 0;

          for(var i=0; i<cartArray.length; i++){
            notiCount += cartArray[i].qty;
          }
          this.quantity = notiCount;
          //console.log(this.quantity)
          // return this.quantity;

        }
      }


    }
  }
</script>
