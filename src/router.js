import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import Home from "./pages/home/HomePage.vue";
import Menu from "./pages/menu/Menu.vue";
import Contact from "./pages/contact/ContactPage.vue";
import Imprint from "./pages/imprint/Imprint.vue";
import Privacy from './pages/privacy/Privacy.vue';
import Success from "./pages/success/Success.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", 
      component: Home,
      meta: {
        headerHeightMax: true,
        headline: 'Anamit - Vietnamese Authentic',
        showSubHeader: true,
        showBackground: true,
      }
    },
    { path: "/menu", 
      component: Menu, 
      meta: { 
        headline: 'Unser Menu',
        showBackground: true,
      } 
    },
    { path: "/contact", 
      component: Contact, 
      meta: { 
        headline: 'Contact us',
        showBackground: true,
      } 
    },
    { path: "/impressum", 
      component: Imprint, 
      meta: { 
        headline: 'Impressum',
      } 
    },
    { path: "/privacy", 
      component: Privacy, 
      meta: { 
        headline: 'Datenschutz',
      } 
    },
    { path: "/success", 
      component: Success, 
      meta: { 
        headline: 'Formular abgeschickt',
      } 
    },
    { path: "/:notFound(.*)", 
      component: NotFound, 
      meta: { 
        headline: '404 - Page not found',
        showBackground: false,
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
