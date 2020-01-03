<template>
    <div>
        <label class="text-muted">Search</label>

        <form class="search-name" @submit.prevent="search">
            <input placeholder="Type a product name..." v-model="text"/>

            <button type="submit" :class="text ? 'show' : ''">
                <img src="@/assets/images/icons/search.svg">
            </button>
        </form>
    </div>
</template>

<script>
    export default {

        name: 'Search',

        watch: {
            text() {
                if (this.text.length === 0) {
                    this.search()
                }
            },
        },

        data() {
            return {
                text: null
            };
        },

        methods: {

            search() {
                this.$store.dispatch('updateNameFilter', this.text);
                this.$store.dispatch('getProducts')
            }
        }

    }
</script>
