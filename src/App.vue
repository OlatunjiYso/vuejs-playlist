<template>
   <div>
     <add-blog> </add-blog>
  </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';


export default {
   components: {
        'add-blog': addBlog
    },
  data() {
    return {
    
    };
  },
  methods: {
    handleSubmit: function() {
      alert("THanks for submitting!");
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
