import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import photoswipe from "@/views/photoswipe";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/photoswipe",
      name: "photoswipe",
      component: photoswipe
    }
  ]
});
