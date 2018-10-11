import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Gallery from "./views/Gallery";
import About from "./views/About";
import KnifeDetails from "./views/KnifeDetails";
import Contact from "./views/Contact";
import ContactKnife from "./views/ContactKnife";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/KnifeDetails/:id",
      name: "KnifeDetails",
      component: KnifeDetails
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/contact/:id",
      name: "ContactKnife",
      component: ContactKnife
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
