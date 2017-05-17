<template>
    <div>
        <h3>Current funds: {{ funds }}</h3>
        <appStock v-for="stock in stockPortfolio" :stock="stock"></appStock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from './Stock.vue'

    export default {
        computed: {
            ...mapGetters([
                'funds',
                'stockPortfolio'
            ])
        },
        components: {
            appStock: Stock
        }
    }
</script>