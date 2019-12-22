import Home from "./components/Pages/Home.vue";
import About from "./components/Pages/About.vue";
import News from "./components/Pages/News.vue";
import Products from "./components/Pages/Products.vue";
import Contact from "./components/Pages/Contact.vue";
import Advices from "./components/Pages/Advices.vue";
import Services from "./components/Pages/Services.vue";
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import Products_in from "./components/Pages/Products_in.vue";

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      header: Header,
      footer: Footer
    }
  },
  {
    path: "/products_in",
    name: "products-in",
    components: {
      default: Products_in,
      header: Header,
      footer: Footer
    }
  },
  {
    path: "/about",
    name: "about",
    components: {
      default: About,
      header: Header,
      footer: Footer
    }
  },
  {
    path: "/news",
    name: "news",
    components: {
      default: News,
      header: Header,
      footer: Footer
    }
  },
  {
    path: "/services",
    name: "services",
    components: {
      default: Services,
      header: Header,
      footer: Footer
    }
  },
  {
    path: "/advices",
    name: "advices",
    components: {
      default: Advices,
      header: Header,
      footer: Footer
    }
  },
  {
    path: "/products",
    name: "products",
    components: {
      default: Products,
      header: Header,
      footer: Footer
    }
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      default: Contact,
      header: Header,
      footer: Footer
    }
  },
  { path: "*", component: Home }
];
