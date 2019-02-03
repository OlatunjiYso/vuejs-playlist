<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if = "!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <p>Blog Categories:</p>
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <div id="selectboxes">
        <label>Author:</label>
        <select v-model="blog.author">
          <option v-for="(author, index) in authors" v-bind:key="index"> {{author}}</option>
        </select>
      </div>
      <button v-on:click.prevent="post"> Submit post </button>
    </form>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="(category, index) in blog.categories" v-bind:key="index">{{ category }}</li>
      </ul>
      <p> Author: {{blog.author}}</p>
    </div>
    <h3 v-show = "submitted"> Post Submitted !!  </h3>
  </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["You", "us", "everyone"],
      submitted: false,
    };
  },
  methods: {
    post: function() {
      this.$http.post('https://vue-playlist-738e1.firebaseio.com/blogposts.json',this.blog).
      then(function (data) {
        console.log(data)
        this.submitted = true
      })
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
}
#checkboxes label {
  display: inline-block;
}
</style>
