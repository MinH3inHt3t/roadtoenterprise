import {
	useLayoutFactory
} from "../helpers/useLayoutFactory";
export const LAYOUTS = {
	standard: Symbol("standard"),
	auth: Symbol("auth"),
};
const {
	useLayout
} = useLayoutFactory(LAYOUTS, LAYOUTS.standard);
export {
	useLayout
};
