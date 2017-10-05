<template>
	<transition
	 :name='transitionName'
  >
  	<router-view></router-view>
	</transition>
</template>
<script>
import animate from 'animate.css'
export default{
	data() {
		return {
			transitionName: ''
		}
	},
	watch: {
		'$route'(to, from) {
			if(to.name === 'home' && from.name === null) {
				this.transitionName = ''
			}
			else if (to.name === 'home') {
				this.transitionName = 'slideOut'
			}
			else if (to.name === 'user') {
				this.transitionName = 'slideIn'
			}
		}
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
.slideIn-enter {
	left: 10rem;
	top: 0;
}
.slideIn-enter-to {
	left: 0;
	top: 0;
}
.slideIn-leave {
	left: 0;
	top: 0;
}
.slideIn-leave-to {
	left: -10rem;
	top: 0;
}
.slideIn-enter-active, .slideIn-leave-active {
	transition: all .3s linear;
}
.slideOut-enter {
	left: -10rem;
	top: 0;
}
.slideOut-enter-to {
	left: 0;
	top: 0;
}
.slideOut-leave {
	left: 0;
	top: 0;
}
.slideOut-leave-to {
	left: 10rem;
	top: 0;
}
.slideOut-enter-active, .slideOut-leave-active {
	transition: all .3s linear;
}
</style>
