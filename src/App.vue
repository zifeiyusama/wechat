<template>
	<transition
  >
  	<router-view></router-view>
	</transition>
</template>
<script>
import animate from 'animate.css'
export default{
	data() {
	}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html {
  font-size: 75px;
}
body {
  font-size: 1rem;
  position: relative;
}
.container {
	position: absolute;
	overflow: auto;
	width: 10.0rem;
	height: 17.92rem;
	min-height: 17.92rem;
	margin: auto;
	background: #fff;
}
</style>
