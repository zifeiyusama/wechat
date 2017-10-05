<template>
  <div class="container"  infinite-wrapper>
    <page-header isHome="true"></page-header>
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
    ...mapActions(['fetchAllData'])
  },
  created() {
    this.fetchAllData({
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
</style>
