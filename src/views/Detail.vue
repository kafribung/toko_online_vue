<template>
    <div class="detail">
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
                            <span>Detail</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->

        <!-- Product Shop Section Begin -->
        <section class="product-shop spad page-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="product-pic-zoom">
                                    <img class="product-big-img" v-bind:src="defaultGambar" alt />

                                    <h1>{{defaultGamber}}</h1>
                                </div>
                                <div class="product-thumbs">
                                    <carousel
                                        class="product-thumbs-track ps-slider"
                                        :nav="false"
                                        :margin="10"
                                    >
                                        <div
                                            class="pt active"
                                            v-for="(slug, index) in slugProduct.galleries"
                                            :key="index"
                                            v-on:click="ganti_gambar(slug.image)"
                                        >
                                            <img :src="slug.image" alt />
                                        </div>
                                    </carousel>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-details text-left">
                                    <div class="pd-title">
                                        <span>{{slugProduct.type}}</span>
                                        <h3>{{slugProduct.name}}</h3>
                                    </div>
                                    <div class="pd-desc text-justify">
                                        <div v-html="slugProduct.description"></div>
                                        <h4>{{slugProduct.price}}</h4>
                                    </div>
                                    <div class="quantity">
                                        <router-link to="/shopping">
                                            <a
                                                href="#"
                                                v-on:click.prevent="setKerangjang(slugProduct.id, slugProduct.name, slugProduct.galleries[0].image, slugProduct.price)"
                                                class="primary-btn pd-cart"
                                            >Beli</a>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Shop Section End -->

        <Related />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";
import carousel from "vue-owl-carousel";
import axios from "axios";

export default {
    name: "Detail",
    data: function () {
        return {
            // AmbildataURL: this.$route.params.slug
            defaultGambar: null,

            slugProduct: null,

            dataKerangjang: [],
        };
    },
    methods: {
        ganti_gambar: function (gambar) {
            return (this.defaultGambar = gambar);
        },

        setData: function (data) {
            this.slugProduct = data;

            this.defaultGambar = data.galleries[0].image;
        },

        // Set Data Local
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
            } else return;
        },
    },
    mounted: function () {
        // Get Data Local
        if (localStorage.getItem("dataKerangjang")) {
            try {
                this.dataKerangjang = JSON.parse(
                    localStorage.getItem("dataKerangjang")
                );
            } catch (e) {
                localStorage.removeItem("dataKerangjang");
            }
        }

        // API Parameter
        axios
            .get("https://kafriansyah.com/api/product/", {
                params: {
                    slug: this.$route.params.slug,
                },
            })
            .then((response) => this.setData(response.data.data))
            .catch((error) => console.log(error));
    },
    components: {
        Header,
        Footer,
        carousel,
    },
};
</script>
