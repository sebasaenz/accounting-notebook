<template>
  <div id="app">
    <div class="mb-5">
      <h2>Accounting notebook</h2>
    </div>
    <div v-for="(transaction, i) in transactions" :key="i">
      <Transaction :item="transaction" class="mb-2"/>
    </div>
  </div>
</template>

<script>
import Transaction from './components/Transaction.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Transaction
  },
  data() {
    return {
      transactions: []
    }
  },
  methods: {
    getTransactions() {
      axios.get('http://localhost:5000/transactions')
        .then(r => {
          this.transactions = r.data.transactions
        })
    }
  },
  mounted() {
    this.getTransactions()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
