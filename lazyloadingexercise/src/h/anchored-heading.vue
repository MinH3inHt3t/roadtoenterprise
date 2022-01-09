<!-- <template>
	<div id="">
		<slot></slot>
	</div>
</template> -->

<script>
	import {
		h
	} from "vue";

	export default {
		name: "anchored-heading",
		props: {
			level: {
				type: Number,
				required: true,
			},
		},
		methods: {
			getChildrenTextContent(children) {
				console.log(children);
				return children
					.map((node) => {
						return typeof node.children === "string" ?
							node.children :
							Array.isArray(node.children) ?
							this.getChildrenTextContent(node.children) :
							"";
					})
					.join("");
			},
		}, //methods block

		render() {
			// create kebab-case id from the text contents of the children
			const headingId = this.getChildrenTextContent(this.$slots.default())
				.toLowerCase()
				.replace(/\W+/g, "-") // replace non-word characters with dash
				.replace(/(^-|-$)/g, ""); // remove leading and trailing dashes

			return h("h" + this.level, [
				h(
					"a", {
						name: headingId,
						href: "#" + headingId,
					},
					this.$slots.default()
				),
			]);
		}, //render block
	};
</script>

<style>
</style>
