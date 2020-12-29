<template>
  <div class="testing">
    <h1>This is a testing page</h1>

    <ul>
      <li v-for="(meme,index) in memes" :key="index">
        {{meme.name}}
        <img v-bind:src="meme.url" width="100" height="">
      </li>
    </ul>
    
  </div>
</template>

<script type="text/javascript">
  import Myservice from '@/services/Myservice.js'
  
  export default {
    data(){
      return {
        memes: null,
        error: false
      }
    },
    created(){
      this.getMemes();
    },
    methods:{
      getMemes(){
        Myservice.getMemes()
        .then(response => {
          // console.log(response.data.items)
          this.memes = response.data.data.memes
        })
        .catch(error => {
          this.error = true
          console.log('There was an error:',error.response)
        })
      }
    }
  }
</script>
