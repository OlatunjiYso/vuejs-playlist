<template>
   <div>
     <keep-alive>
      <component v-bind:is="component"></component>
     </keep-alive>
      <button v-on:click ="component='form-one'"> Show form one </button>
      <button v-on:click ="component='form-two'"> Show form two </button>
  </div>
</template>

<script>
// Imports
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
   components: {
        'form-one': formOne,
        'form-two': formTwo
    },
  data() {
    return {
      component:'form-two'
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
