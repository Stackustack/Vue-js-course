<template>
    <div class="col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>            
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model.number="quantity"
                    >
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success"
                        :class="{ 'btn-danger': insufficientFunds }"
                        @click="buyStock" 
                        :disabled="incorrectOrder">
                        {{ insufficientFunds ? "Insufficient funds" : "Buy"}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: '' 
            }
        },
        computed: {
            insufficientFunds() {
                return this.quantity * this.stock.price > this.$store.getters.funds
            },
            incorrectOrder() {
                if ( this.insufficientFunds || this.quantity <= 0 || !Number.isInteger(this.quantity) ) {
                    return true
                } else {
                    return false
                } 
            }
        },
        methods: {
            ...mapActions({
                buyStockDB: 'buyStock'
            }),
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                console.log(order)
                this.buyStockDB(order)
                this.quantity = ''
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>