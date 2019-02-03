import blogList from '../components/listBlogs.vue';
import addNew from '../components/addBlog.vue';

export default [

  {
    path: '/',
    component: blogList
  },

  {
    path: '/add',
    component: addNew
  },
]
