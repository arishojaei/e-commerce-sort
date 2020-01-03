<template>
    <div>

        <!-- Search -->
        <search class="col-12 col-md-10 col-lg-8 mx-auto mb-5" />
        <!-- / Search -->

        <!-- Products -->
        <div class="product-list card-columns">

            <!-- Product -->
            <product-card v-for="item in products"
                          :key="item.id"
                          :data="item"/>

            <!-- Loading -->
            <loading class="content-loading" v-show="$store.state.loading"/>

        </div>
        <!-- / Products -->

    </div>
</template>

<script>

    // Modules & Components
    import search from '@/modules/search';
    import loading from '@/components/Loading'
    import ProductCard from '@/components/ProductCard';

    export default {

        name: 'home',

        components: {
            search,
            loading,
            ProductCard
        },

        computed: {
            products() {
                return this.$store.state.products.data
            }
        },

        methods: {
            /**
             * Load products data
             *
             * @param payload
             */
            loadData(payload) {
                this.$store.dispatch('getProducts', payload)
            },
        },

        created() {
            this.loadData()
        }
    }
</script>
