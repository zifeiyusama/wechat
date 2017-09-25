<template>
  <div id="header">
    <div id="header-content">
      <div id="header-left">
        <span id="header-return"></span>
        <span id="header-left-content">Discover</span>
      </div>
      <div id="header-center">Profile</div>
      <div id="header-right">
        New
      </div>
    </div>
  </div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	#header {
    position: fixed;
    width: 10.0rem;
    height: 1.71rem;
    z-index: 1000;
    background: #35353a;
    color: #fff;
    font-size: 0.4rem;
  }
  #header-content {
    display: flex;
    justify-content: space-between;
    margin-top: 0.91rem;
    height: 0.8rem;
  }
  #header-left {
    position: relative;
    margin-left: 0.36rem;
    height: 0.8rem;
    width: 4.0rem;
    color: #fff;
  }
  #header-left-content {
    height: 0.8rem;
    margin-left: 0.36rem;
  }
  #header-center {
    height: 0.8rem;
    text-align: center;
  }
  #header-right {
    margin-right: 0.36rem;
    height: 0.8rem;
    width: 4.0rem;
    text-align: right;
  }
  #header-return {
    position: absolute;
    display: inline-block;
    left: -0.32rem;
    width: 0;
    height: 0;
    border-width: 0.24rem 0.29rem;
    border-style: dashed solid dashed dashed;
    border-color: transparent #fff transparent transparent;
  }
  #header-return:after {
    content: "";
    position: absolute;
    left: -0.08rem;
    top: -0.13rem;
    display: block;
    width: 0;
    height: 0;
    border-width: 0.13rem 0.19rem;
    border-style: dashed solid dashed dashed;
    border-color: transparent #35353a transparent transparent;
  }
</style>
