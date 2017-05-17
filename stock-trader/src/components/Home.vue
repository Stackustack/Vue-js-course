<template>
    <div>
        <h1>Trade or view your portfolio</h1>
        <hr>
        <p>Your current funds: {{ currentFunds }}</p>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                currentFunds: 'funds'
            })
        }
    }
</script>