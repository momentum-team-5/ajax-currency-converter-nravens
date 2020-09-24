const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const contentDiv = document.getElementById('wrapper')
const base_url = 'https://api.exchangeratesapi.io/latest?base=' 
let exchange_rate
let final_amount
let currency_data
let lookup_key



const selectElement = document.querySelector('#first_currency')
selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result')
  let path = event.target.value  
  console.log(path)
  url = base_url + path
  console.log(url)

  fetch(url)
  .then (promise => promise.json()) 
  .then (function(data) {
    currency_data = data
    console.log(currency_data.rates)
    console.log(currency_data.rates.USD)
     })
})

const selectElement2 = document.querySelector('#second_currency')
selectElement2.addEventListener('change', (event) => {
  const resultDiv = document.querySelector('.result')
  let lookup_key = event.target.value  
  console.log(lookup_key)
  console.log(currency_data)
  exchange_rate = currency_data['rates'][lookup_key] 
  console.log(exchange_rate)
  resultDiv.textContent = exchange_rate
})








