<template>
  <div>
    <div class="">
      123123123
    </div>
    <div>{{ currentUser.userName }}</div>
    <div>{{ currentUser.avatar }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions(['fetchAllData'])
  },
  mounted() {
    this.fetchAllData({
      userId: this.currentUser.userId
    });
  }
}
</script>
