import stocks from '../../data/data.js'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCKS_PRICES'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.floor(stock.price * (Math.random() * (1.6 - 0.5) + 0.5))
        })
    }
}

const actions = {
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocksPrices: ({commit}) => {
        commit('RND_STOCKS_PRICES')
    }
}

const getters = {
    stocks: (state) => {
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}