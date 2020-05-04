<template>
  <div class="home">
    <Header />
    <Hero />
    <Product />
    <Insta />
    <Partner />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Product from "@/components/Product.vue";
import Insta from "@/components/Insta.vue";
import Partner from "@/components/Partner";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    Product,
    Insta,
    Partner,
    Footer
  }
};
</script>
