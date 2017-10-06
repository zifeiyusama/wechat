<template>
  <v-touch
   @swipeleft="swipeleftHandler"
   @swiperight="swiperightHandler"
  >
    <ul
     class="photo-list"
    >
      <li
       class="photo-item"
       :class="{'active-photo' : activeIndex==i}"
       v-for="(item, i) in photoUrls"
       :key="item.photo"
      >
        <img class="photo" :src="item.loaded ? item.photo : item.thumb">
      </li>
    </ul>
    <ul class="icon-list" @click.stop="iconClickHandler($event)">
      <li
       class="icon"
       :class="{'active-icon': activeIndex==j}"
       v-for="(item, j) in photos"
       :data-index="j"
      ></li>
    </ul>
  </v-touch>
</template>
<script>
import {postThumbBaseUrl, postBaseUrl} from '../config/env.js'

export default {
  name: 'PhotoViewer',
  props: ['index', 'photos', 'loading'],
  data(){
    return {
      postBaseUrl,
      postThumbBaseUrl,
      activeIndex: this.index,
      transitionName: '',
      photoUrls: this.photos.map(x => {
        return {
          thumb: postThumbBaseUrl + x.thumb,
          photo: postBaseUrl + x.photo,
          loaded: false
        }
      })
    }
  },
  watch: {
    loading: function(newValue) {
      if (this.activeIndex > -1 && newValue) {
        //如果是加载高清图的状态
        this.loadPhoto()
      }
    }
  },
  methods: {
    iconClickHandler(event) {
      if (event.target.tagName.toLowerCase() === 'li') {
        this.changeActiveIndex(parseInt(event.target.dataset.index))
      }
    },
    changeActiveIndex(index) {
      if (index < 0 || index >= this.photoUrls.length) return;
      this.activeIndex = index;
      if (!this.photoUrls[index].loaded) {
        this.$emit("loadingPhoto", true);
      }
    },
    loadPhoto() {
      setTimeout(function(){
        this.photoUrls[this.activeIndex].loaded = true;
        this.$emit("loadingPhoto", false);
      }.bind(this), 1500);
    },
    swipeleftHandler(){
      this.changeActiveIndex(this.activeIndex + 1);
    },
    swiperightHandler(){
      this.changeActiveIndex(this.activeIndex - 1);
    }
  },
  mounted() {
    this.loadPhoto();
  }
}
</script>
<style scoped>
.post-list {
  position: relative;
  width: 10.0rem;
  list-style: none;
}
.photo-item {
  display: none;
}
.active-photo {
  display: inline-block !important;
}
.photo {
  width: 10.0rem;
}
.icon-list {
  position: absolute;
  bottom: 0.43rem;
  text-align: center;
  height: 0.19rem;
  width: 10.0rem;
  list-style: none;
}
.icon {
  display: inline-block;
  margin-left: 0.23rem;
  height: 0.19rem;
  width: 0.19rem;
  background: #333;
  border-radius: 0.19rem;
}
.active-icon {
  background: #fff !important;
}
</style>