<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>By:  {{blog.author}}</p> 
        <span> Featured in: </span>
        <ul>
            <li v-for = "(category, index) in blog.categories" v-bind:key="index"> {{category}} </li>
        </ul>
        </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {},
        }
    },
    created() {
        this.$http.get('https://vue-playlist-738e1.firebaseio.com/blogposts/' + this.id+'.json').then(function(data){
             console.log(data.body);
            this.blog = data.body;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}


li{
  display: inline-block;
  margin-right: 6px;
}
</style>