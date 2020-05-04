<template>
  <div class="hero">
    <!-- Hero Section Begin -->
    <section class="hero-section">
      <carousel class="hero-items" :items="1" :nav="false" :autoplay="true" :loop="true">
        <div class="single-hero-items set-bg" style="background-image :url(img/hero-1.jpg)">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Pakaian Dewasa</span>
                <h1>Murah, Bergaransi dan Aman</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#product" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="single-hero-items set-bg" style="background-image: url(img/hero-2.jpg)">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Pakaian Dewasa</span>
                <h1>Murah, Bergaransi dan Aman</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#product" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="single-hero-items set-bg" style="background-image: url(img/hero-3.jpg)">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Pakaian Dewasa</span>
                <h1>Murah, Bergaransi dan Aman</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#product" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </section>
    <!-- Hero Section End -->
  </div>
</template>


<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Hero",
  components: {
    carousel
  }
};
</script>