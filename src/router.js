import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import Home from "./pages/home/HomePage.vue";
// import OurMenu from "./components/pages/menu/OurMenu.vue";
// import ContactUs from "./components/pages/contact/ContactUs.vue";
// import Success from "./components/pages/success/Success.vue";
// import Impress from "./components/pages/impress/Impress.vue";
// import NotFound from "./components/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    // { path: "/menu", component: OurMenu },
    // { path: "/contact", component: ContactUs },
    // { path: "/success", component: Success },
    // { path: "/impressum", component: Impress },
    // { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
