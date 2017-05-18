import Vue from 'vue'

export const loadDataAction = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const stockPortfolio = data.stockPortfolio
                const stocks = data.stocks
                const funds = data.funds

                const portfolio = {
                    stockPortfolio,
                    funds
                }
                commit('SET_PROFILE', portfolio)
                commit('SET_STOCKS', stocks)
            }
        })
}