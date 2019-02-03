import blogList from '../components/listBlogs.vue';
import addNew from '../components/addBlog.vue';
import singleBlog from '../components/singleBlog';

export default [

  { path: '/',  component: blogList },

  { path: '/add', component: addNew },

  { path: '/blog/:id', component: singleBlog },
]
