<template>
	<div class="home">
		<Layout>
			<div class="container mx-auto mt-4">
				<p v-if="user">Hello {{ user.name }}?</p>
			</div>
		</Layout>
	</div>

	<div class="home">
		<button @click.prevent="showSpinner">Show global spinner</button>
		State: {{ isGlobalSpinnerVisible }}
	</div>
</template>
<script>
	import Layout from "@/layout/Layout";
	import {
		useGlobalSpinner
	// } from "@/components/globalSpinner/GlobalSpinnerProvider";
	} from "../components/globalSpinner/GlobalSpinnerProvider";
	import {
		userComputed,
		setUser
	} from "@/services/stateful/userService";
	export default {
		name: "Home",
		components: {
			Layout
		},
		setup() {
			const {
				isGlobalSpinnerVisible,
				setGlobalSpinnerOn,
				setGlobalSpinnerOff
			} =
			useGlobalSpinner();
			const showSpinner = () => {
				setGlobalSpinnerOn();
				setTimeout(() => {
					setGlobalSpinnerOff();
				}, 3000);
			};
			return {
				isGlobalSpinnerVisible,
				showSpinner,
			};
		},
		computed: {
			...userComputed,
		},
		created() {
			// Imagine we performed login here and now we got a user payload
			const userData = {
				name: "Maxwell",
			};
			// Set the user data in the userService
			setUser(userData);
		},
	};
</script>
