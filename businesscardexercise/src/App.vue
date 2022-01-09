<template>
	<GlobalSpinnerProvider>
		<router-view />
	</GlobalSpinnerProvider>
</template>

<script>
	// import HelloWorld from "./components/HelloWorld.vue";
	import GlobalSpinnerProvider from "./components/globalSpinner/GlobalSpinnerProvider.vue";

	export default {
		name: "App",
		components: {
			// HelloWorld,
			GlobalSpinnerProvider,
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
