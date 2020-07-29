<template>
  <div class="app-page">
    <div>
      <Loader v-if="loading"/>
      <div v-else>
        <div class="page-title">
          <h3>Счет</h3>

          <button class="btn waves-effect waves-light btn-small" @click="refresh">
            <i class="material-icons">refresh</i>
          </button>
        </div>

        <Loader v-if="loading"/>

        <div v-else class="row">
          <HomeBill
            :rates="currency.rates"
          />

          <HomeCurrency
            :rates="currency.rates"
            :date="currency.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBill from '../components/HomeBill'
import HomeCurrency from '../components/HomeCurrency'

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    currency: null
  }),
  methods: {
    async refresh () {
      console.log('lo_ol__line_43 :: Refresh')
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  },
  async mounted () {
    this.currency = await this.$store.dispatch('fetchCurrency')
    console.log('lo_ol__line_37 this.currency:: ', this.currency)
    this.loading = false
  },
  components: {
    HomeBill,
    HomeCurrency
  }
}
</script>
