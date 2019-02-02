<template>
<div>
<h2> See our guys </h2>
  <ul> 
    <li v-for ="ninja in ninjas"> {{ninja}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
     ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<style scoped>
h2 {
  color :gray;
}
</style>
