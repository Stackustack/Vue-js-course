<template>
    <div>
        <appStock v-for="stock in stocks" :stock="stock"></appStock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from './Stock.vue'

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            ...mapGetters([
                'stocks'
            ])
        }
    }
</script>
