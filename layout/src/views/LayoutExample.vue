<template>
	<div>
		<div class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
			<button @click.prevent="setLayout(LAYOUTS.standard)">
				Layout standard
			</button>
			<button @click.prevent="setLayout(LAYOUTS.auth)">
				Layout auth
			</button>
		</div>
		<Layout class="mx-auto max-w-7xl">
			<!-- Layout content slots -->
			<template #default>
				<p>This is p tag </p>
			</template>
		</Layout>
	</div>
</template>



<script>
	import Layout from "@/layout/Layout";
	import {
		useLayout
	} from "@/layout/composables/useLayout";
	export default {
		components: {
			Layout,
		},
		setup() {
			const {
				setLayout,
				LAYOUTS
			} = useLayout();
			return {
				setLayout,
				LAYOUTS,
			};
		},
	};
</script>
