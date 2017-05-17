const state = {
    funds: 1000,
    stocks: [] // {id: 2, quantity: 10}
}

const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id == stockId)
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= (stockPrice * quantity)
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId)
        if (record.quantity > quantity) {
            record.quantity -= quantity
            state.funds += quantity * stockPrice
        } else {
            state.funds += record.quantity * stockPrice
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }

    }
}

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order)
    },
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds (state) {
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}