<template>
    <div>
        <label class="text-muted">Sort by price</label>
        <select class="search-price" v-model="price">
            <option value="">All Products</option>
            <option value="500,1000">500 - 1000</option>
            <option value="1000,2000">1000 - 2000</option>
            <option value="2000,3000">2000 - 3000</option>
            <option value="3000,4000">3000 - 4000</option>
            <option value="4000,5000">4000 - 5000</option>
        </select>
    </div>
</template>

<script>
    export default {

        name: 'Search',

        watch: {
            price() {
                this.search()
            },
        },

        data() {
            return {
                price: ''
            };
        },

        methods: {

            search() {
                this.$store.dispatch('updatePriceFilter', this.price);
                this.$store.dispatch('getProducts')
            }
        }

    }
</script>
