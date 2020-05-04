<template>
  <div class="header">
    <!-- Header Section Begin -->
    <header class="header-section">
      <div class="header-top">
        <div class="container">
          <div class="ht-left">
            <div class="mail-service">
              <i class="fa fa-envelope"></i>
              <span>bung_fashion@fashion.com</span>
            </div>
            <div class="phone-service">
              <i class="fa fa-phone"></i>
              <span>+628 22081996</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="inner-header">
          <div class="row">
            <div class="col-lg-2 col-md-2">
              <div class="logo">
                <a href="./index.html">
                  <img src="img/logo_website_shayna.png" alt />
                </a>
              </div>
            </div>
            <div class="col-lg-7 col-md-7"></div>
            <div class="col-lg-3 text-right col-md-3">
              <ul class="nav-right">
                <li class="cart-icon">
                  Keranjang Belanja &nbsp;
                  <a href="#">
                    <i class="icon_bag_alt"></i>
                    <span>{{dataKerangjang.length}}</span>
                  </a>
                  <div class="cart-hover">
                    <div class="select-items">
                      <table>
                        <tbody v-if="dataKerangjang.length > 0">
                          <tr v-for="(data, index) in dataKerangjang" :key="index">
                            <td class="si-pic">
                              <img :src="data.image" width="50" height="50" />
                            </td>
                            <td class="si-text">
                              <div class="product-selected">
                                <p>{{data.price}}</p>
                                <h6>{{data.name}}</h6>
                              </div>
                            </td>
                            <td class="si-close" v-on:click="removeItem(index)">
                              <i class="ti-close"></i>
                            </td>
                          </tr>
                        </tbody>

                        <tbody v-else>
                          <tr>Masih Kosong</tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="select-total">
                      <span>total:</span>
                      <h5>Rp. {{total}},00</h5>
                    </div>
                    <div class="select-button">
                      <router-link to="/shopping" class="primary-btn view-card">VIEW CARD</router-link>
                      <router-link to="/shopping" class="primary-btn checkout-btn w-100">CHECK OUT</router-link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dataKerangjang: []
    };
  },

  methods: {
    removeItem(index) {
      let konfir = confirm("Hapus Barang ?");

      if (konfir == true) {
        this.dataKerangjang.splice(index, 1);
        const parsed = JSON.stringify(this.dataKerangjang);
        localStorage.setItem("dataKerangjang", parsed);
        console.log(this.dataKerangjang);
      } else return;
    }
  },

  mounted() {
    if (localStorage.getItem("dataKerangjang")) {
      try {
        this.dataKerangjang = JSON.parse(
          localStorage.getItem("dataKerangjang")
        );
      } catch (e) {
        localStorage.removeItem("dataKerangjang");
      }
    }
  },

  computed: {
    total() {
      return this.dataKerangjang.reduce(function(index, item) {
        return index + item.price;
      }, 0);
    }
  }
};
</script>