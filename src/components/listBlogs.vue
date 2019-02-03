<template>
  <div id="show-blogs">
    <h2>List Blog Articles</h2>
    <label>Search here</label>
    <input type="text" v-model="search">
    <button v-on:click="logSearch">log search</button>

    <div v-for="(blog, index) in filteredBlogs" v-bind:key="index" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

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
      .get("https://vue-playlist-738e1.firebaseio.com/blogposts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
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
  mixins: [searchMixin]
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