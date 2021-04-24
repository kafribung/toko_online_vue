<template>
    <div class="product" id="product">
        <!-- Women Banner Section Begin -->
        <section class="women-banner spad">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 mt-5" v-if="products.length > 0">
                        <carousel
                            class="product-slider"
                            :margin="40"
                            :nav="false"
                            :loop="true"
                            :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}"
                        >
                            <!-- img/products/women-1.jpg  -->
                            <div
                                class="product-item"
                                v-for="(product, index) in products"
                                :key="index"
                            >
                                <div class="pi-pic">
                                    <img :src="product.galleries[0].image" alt />
                                    <ul>
                                        <li class="w-icon active">
                                            <a
                                                href="#"
                                                v-on:click.prevent="setKerangjang(product.id, product.name, product.galleries[0].image, product.price)"
                                            >
                                                <i class="icon_bag_alt"></i>
                                            </a>
                                        </li>
                                        <li class="quick-view">
                                            <router-link :to="'/detail/' + product.slug">+ Detail</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">{{product.type}}</div>
                                    <router-link to="/detail">
                                        <h5>{{product.name}}</h5>
                                    </router-link>
                                    <div class="product-price">
                                        {{product.price}}
                                        <span>Rp. 35.00</span>
                                    </div>
                                </div>
                            </div>
                        </carousel>
                    </div>
                    <div v-else>
                        <h3>Gambar tidak ada</h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- Women Banner Section End -->
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

import axios from "axios";

export default {
    name: "Product",
    components: {
        carousel,
    },
    data: function () {
        return {
            products: [],
            dataKerangjang: [],
        };
    },

    methods: {
        setKerangjang(id, name, image, price) {
            var dataKerangjang = {
                id: id,
                name: name,
                image: image,
                price: price,
            };
            var konfir = confirm("Beli produk " + name);
            if (konfir == true) {
                this.dataKerangjang.push(dataKerangjang);
                const parsed = JSON.stringify(this.dataKerangjang);
                localStorage.setItem("dataKerangjang", parsed);
                console.log(this.dataKerangjang);
                location.reload();
            } else return;
        },
    },

    mounted: function () {
        if (localStorage.getItem("dataKerangjang")) {
            try {
                this.dataKerangjang = JSON.parse(
                    localStorage.getItem("dataKerangjang")
                );
            } catch (e) {
                localStorage.removeItem("dataKerangjang");
            }
        }
        axios
            .get("https://kafriansyah.com/api/product")
            .then((response) => (this.products = response.data.data))
            .catch((error) => console.log(error));
    },
};
</script>