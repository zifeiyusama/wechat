<template>
  <div id="container">
    <page-header></page-header>
    <wall :userId="currentUser.userId"></wall>
    <post :items="posts"></post>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import PageHeader from '../../components/Header.vue';
import Wall from '../../components/Wall.vue'
import Post from '../../components/Post.vue'

export default {
  name: 'home',
  components: {PageHeader, Wall, Post},
  computed: {
    ...mapGetters(['currentUser']),
    ...mapState(['posts']),
  },
  methods: {
    ...mapActions(['fetchAllPosts'])
  },
  created() {
    this.fetchAllPosts({
      userId: this.currentUser.userId
    });
  }
}
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #576b95;
  }
  #container {
    overflow: auto;
    width: 10.0rem;
    height: 17.92rem;
    min-height: 17.92rem;
    margin: 0 auto;
    background: #fff;
  }
  .posts {
    margin-top: 1.11rem;
    background: #fff;
    height: auto;
    width: 10.0rem;
  }
</style>
