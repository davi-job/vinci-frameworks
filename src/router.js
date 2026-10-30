import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import CarroView from "./views/CarroView.vue";

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: "/", component: HomeView },
		{ path: "/carro", component: CarroView },
	],

	scrollBehavior(to) {
		if (to.hash) {
			return { el: to.hash, behavior: "smooth" };
		}
		return { top: 0 };
	},
});
