import {
	layoutFactory
} from "@/layout/helpers/layoutFactory";
import ProductLayoutComponent from "@/layout/ProductLayout.vue";
// import GridLayout from "@/views/product/layout/GridLayout";
import GridLayout from "../components/GridLayout.vue";
import ListLayout from "../components/ListLayout.vue";
// List of layouts available
const LAYOUTS = {
	grid: Symbol("grid"),
	list: Symbol("list"),
};
// Mapping of available layouts to components
const layoutComponents = {
	[LAYOUTS.grid]: GridLayout,
	[LAYOUTS.list]: ListLayout,
}; // Initialise the layout factory that returns a Layout component
// with injected useLayout via props
const {LayoutComponent: ProductLayout,useLayout: useProductLayout,} = layoutFactory({
	LayoutComponent: ProductLayoutComponent,
	layoutComponents,
	LAYOUTS,
	defaultLayout: LAYOUTS.grid,
});
export {
	ProductLayout,
	useProductLayout,
	LAYOUTS
};
