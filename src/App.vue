<template>
  <div>
   <h2> {{ title }} </h2>
  <ninjas></ninjas>
  </div>
</template>

<script>
 import Ninjas from './Ninjas.vue'
export default {
  components: {
    ninjas: Ninjas
  },
  data () {
    return {
      title: "Our Ninjas"
    }
  }
}
</script>

<style>

</style>
