<template>
  <div>
    <div class="portfolio">
      <ResultBox />
      <HeaderRow />
      <PurchasesRow :stocks="stocks" :purchases="purchases" />
      <AdderRow />
    </div>
    <div v-if="forecastTableIsOpen"><ForecastTable /></div>
  </div>
</template>

<script>
import ResultBox from './ResultBox'
import HeaderRow from './HeaderRow'
import PurchasesRow from './PurchasesRow'
import AdderRow from './AdderRow'
import ForecastTable from './ForecastTable'
import Constant from '../Constant'

export default {
  name: 'Portfolio',
  data () {
    return {
      forecastTableIsOpen: false,
      forecast: [],
      stocks: {},
      purchases: {
        purchaseOrder: []
      }
    }
  },
  components: {
    ResultBox,
    HeaderRow,
    PurchasesRow,
    AdderRow,
    ForecastTable
  },
  created () {
    this.fetchPortfolio()
  },
  methods: {
    fetchPortfolio () {
      fetch(`${Constant.PORTFOLIO_ENDPOINT}`)
        .then(response => response.json())
        .then(portfolio => {
          if (portfolio.length > 0) {
            let purchases = {}
            portfolio.forEach((p, index) => {
              let purchase = {
                symbol: p.symbol,
                share: p.share,
                entry_price: p.entryPrice,
                key: p.id
              }
              purchases['purchase' + index] = purchase
            })
            purchases['purchaseOrder'] = Object.keys(purchases)
            this.fetchStats(purchases)
          }
        })
    },
    fetchStats (purchases) {
      let allStocks = Object.entries(purchases)
        .filter((purchase) => purchase[0].indexOf('Order') === -1)
        .map((purchase) => purchase[1].symbol)
        .filter((purchase, index, purchases) => purchases.indexOf(purchase) === index)

      fetch(`${Constant.IEXTRADING_BATCH_URL}?symbols=${allStocks}&types=quote,stats,dividends&range=5y`)
        .then(response => response.json())
        .then(json => {
          let stocks = {}
          for (let data in json) {
            let stock = {
              ...this.stocks[data],
              market_price: json[data].quote.latestPrice,
              dividend_percentage: json[data].stats.dividendYield,
              // growth: PortfolioService.getDividendGrowth(json[data].dividends)
              growth: 0
            }
            stocks[data] = stock
          }
          this.stocks = stocks
          this.purchases = purchases
        })
    }
  }
}
</script>

<style scoped>
.portfolio {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    font-size: 0.7em;
}
</style>
