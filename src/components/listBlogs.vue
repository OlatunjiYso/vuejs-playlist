<template>
  <div id="show-blogs">
    <h2>List Blog Articles</h2>
    <label>Search here</label>
    <input type="text" v-model="search">
    <button v-on:click="logSearch">log search</button>

    <div v-for="(blog, index) in filteredBlogs" v-bind:key="index" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {
    logSearch: function() {
      console.log(this.search);
    }
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 120) + ". . . . ... .. . . . .";
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin],
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>