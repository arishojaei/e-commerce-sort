<template>
    <div class="search">
        <div class="row">

            <div class="col-12 col-md-8 mb-4">
                <NameSearch/>
            </div>

            <div class="col-12 col-md-4 mb-4">
                <PriceSearch/>
            </div>

        </div>
    </div>
</template>

<script>

    // Components
    import NameSearch from '@/modules/search/components/Name'
    import PriceSearch from '@/modules/search/components/Price'

    export default {

        name: 'Search',

        components: {
            NameSearch,
            PriceSearch
        },

    }
</script>
