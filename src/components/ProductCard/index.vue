<template>
    <div class="card shadow-sm mb-3">

        <div class="card-body">

            <h5 class="card-title font-weight-bold">
                {{ data.name }}
            </h5>

            <p class="card-text">
                {{ data.description }}
            </p>

        </div>

        <ul class="list-group list-group-flush">

            <li class="list-group-item price"
                v-for="(item, index) in data.Attributes"
                :key="index">

                <span class="price-cost">
                    $ {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                </span>

                <span class="price-color"
                      :style="`background-color: ${item.color}`">
                </span>
            </li>
        </ul>

    </div>
</template>

<script>

    export default {

        name: 'ProductCard',

        props: {

            data: {
                required: true,
                type: Object
            }
        },

    };

</script>
