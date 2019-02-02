<template>
  <div>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
       copyright: 'Copyright 2019 Vue explore'
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
