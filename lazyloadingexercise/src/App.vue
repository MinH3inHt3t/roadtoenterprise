<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
	<!-- <LazyloadIntersectionExample /> -->
	<anchoredHeading :level="1"><span>Hello </span>World 1 2 3 $</anchoredHeading>

</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'
	// import PanelModalExample from "./components/PanelModalExample.vue";
	// import LazyloadIntersectionExample from './components/LazyloadIntersectionExample.vue'
	import anchoredHeading from './h/anchored-heading.vue'

	export default {
		name: "App",
		components: {

			anchoredHeading,
			// LazyloadIntersectionExample,
			// HelloWorld
			// PanelModalExample,

		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
