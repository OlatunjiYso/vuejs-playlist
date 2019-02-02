<template>
  <div>
    <footer>
        <p>{{ copyright }} {{title}}</p>
    </footer>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
       copyright: 'Copyright 2019 '
    }
  }
}
</script>

<style scoped>
footer{
  background: #222;
  padding: 8px;
}
p{
  color: lightgreen;
  text-align: center;
}
</style>
