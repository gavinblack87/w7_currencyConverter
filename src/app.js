import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      euroNumber: null,
      reverseNumber: null
    },
    computed: {
      currencyConverter: function () {
        return (this.selectedCurrency * this.euroNumber).toFixed(2)
      },
      reverseConverter: function () {
        return (this.reverseNumber / this.selectedCurrency).toFixed(2)
      }
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function (){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(currencies => this.currencies = currencies.rates)
      },
      selectCurrency: function (e) {
        const index = e.target.value;
        this.selectedCurrency = this.currencies[index];
      },
    }
  })
});
