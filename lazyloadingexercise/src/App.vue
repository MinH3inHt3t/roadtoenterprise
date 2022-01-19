<template>
	<div id="nav" class="container mx-auto">
		<div class="flex space-x-4">
			<router-link to="/">Home</router-link>
			<router-link to="/moderator">Moderator</router-link>
			<router-link to="/admin">Admin</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'
	// import PanelModalExample from "./components/PanelModalExample.vue";
	// import LazyloadIntersectionExample from './components/LazyloadIntersectionExample.vue'
	// import anchoredHeading from './h/anchored-heading.vue'

	export default {
		name: "App",
		components: {

			// anchoredHeading,
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
