<template>
  <div class="partner">
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
      <div class="container">
        <h3 class="text-white mb-5">Madia Partner</h3>
        <carousel
          class="logo-carousel"
          :items="5"
          :nav="false"
          :loop="true"
          :dots="false"
          :autoplay="true"
          :center="true"
          :responsive="{0:{items:2},600:{items:3}}"
        >
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-1.png" alt />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-2.png" alt />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-3.png" alt />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-4.png" alt />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-5.png" alt />
            </div>
          </div>
        </carousel>
      </div>
    </div>
    <!-- Partner Logo Section End -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Partner",
  components: {
    carousel
  }
};
</script>