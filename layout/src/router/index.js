import {
	createRouter,
	createWebHistory
} from "vue-router";
import LayoutExample from "@/views/LayoutExample";
// import ProductLayoutExample from "@/views/product/ProductLayoutExample";
import ProductLayoutExample from "@/views/product/ProductLayoutExample";
const routes = [{
		path: "/",
		name: "LayoutExample",
		component: LayoutExample,
	},
	{
		path: "/products",
		name: "ProductLayoutExample",
		component: ProductLayoutExample,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
