<template>
  <div class="shopping">
    <Header />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more text-left">
              <router-link to="/">
                <i class="fa fa-home"></i> Home
              </router-link>
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">
                <div class="cart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th class="p-name text-center">Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(data, index) in dataKerangjang" :key="index">
                        <td class="cart-pic first-row">
                          <img :src="data.image" />
                        </td>
                        <td class="cart-title first-row text-center">
                          <h5>{{data.name}}</h5>
                        </td>
                        <td class="p-price first-row">Rp.{{data.price}}</td>
                        <td class="delete-item">
                          <a href="#" v-on:click.prevent="removeItem(index)">
                            <i class="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-8 text-left">
                <h4 class="mb-4">Informasi Pembeli:</h4>
                <div class="user-checkout">
                  <form>
                    <div class="form-group">
                      <label for="namaLengkap">Nama lengkap</label>
                      <input
                        type="text"
                        class="form-control"
                        id="namaLengkap"
                        aria-describedby="namaHelp"
                        placeholder="Masukan Nama"
                        v-model="dataCoustumer.name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">Email Address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailAddress"
                        aria-describedby="emailHelp"
                        placeholder="Masukan Email"
                        v-model="dataCoustumer.email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">No. HP</label>
                      <input
                        type="text"
                        class="form-control"
                        id="noHP"
                        aria-describedby="noHPHelp"
                        placeholder="Masukan No. HP"
                        v-model="dataCoustumer.no_hp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="alamatLengkap">Alamat Lengkap</label>
                      <textarea
                        class="form-control"
                        id="alamatLengkap"
                        rows="3"
                        v-model="dataCoustumer.address"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                <div class="proceed-checkout text-left">
                  <ul>
                    <li class="subtotal">
                      ID Transaction
                      <span>#SH12000</span>
                    </li>
                    <li class="subtotal mt-3">
                      Subtotal
                      <span>Rp.{{total}},00</span>
                    </li>
                    <li class="subtotal mt-3">
                      Pajak
                      <span>10%</span>
                    </li>
                    <li class="subtotal mt-3">
                      Total Biaya
                      <span>Rp.{{bayar}},00;</span>
                    </li>
                    <li class="subtotal mt-3">
                      Bank Transfer
                      <span>BRI</span>
                    </li>
                    <li class="subtotal mt-3">
                      No. Rekening
                      <span>2208 1996 1403</span>
                    </li>
                    <li class="subtotal mt-3">
                      Nama Penerima
                      <span>Kafriansyah</span>
                    </li>
                  </ul>
                  <a href class="proceed-btn" v-on:click.prevent="setCoustumer()">Beli Produk</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section End -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";

export default {
  name: "Shopping",
  data() {
    return {
      sapi: "sapi",
      dataKerangjang: [],
      dataCoustumer: {
        name: "",
        email: "",
        no_hp: "",
        address: ""
      }
    };
  },

  methods: {
    setCoustumer() {
      var detail_transaction = this.dataKerangjang.map(function(data) {
        return data.id;
      });
      var setCoustumer = {
        name: this.dataCoustumer.name,
        email: this.dataCoustumer.email,
        no_hp: this.dataCoustumer.no_hp,
        address: this.dataCoustumer.address,
        total_transaction: this.bayar,
        status_transaction: "PENDING",
        detail_transaction: detail_transaction
      };

      axios
        .post("https://kafriansyah.com/api/checkout", setCoustumer)
        .then(this.$router.push("/success"))
        .catch(error => console.log(error));

      return alert(
        "Silahkan TF ke Kafriansyah(BRI) 2208 1996 1403 BRI senilai" +
          this.bayar
      );
    },
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
    },

    pajak() {
      return (this.total * 10) / 100;
    },

    bayar() {
      return this.total + this.pajak;
    }
  },
  components: {
    Header
  }
};
</script>