<template>
  <div>
   <header> 
     <h1 v-on:click="changeTitle()"> {{title}} </h1>
   </header>
  </div>
</template>

<script>
import {bus} from '../main';

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    changeTitle: function(){
     // this.$emit('changeTitle', { new: "Happy ", title: "Ninjas"});
     this.title = 'Happy Ninjas';
     bus.$emit('titleChanged', 'Happy Ninjas')
    }
  }
}
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
