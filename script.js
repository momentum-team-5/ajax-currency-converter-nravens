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



const base_url = 'https://api.exchangeratesapi.io/latest?base=' 
const selectElement = document.querySelector('#first_currency')
const selectElement2 = document.querySelector('#second_currency')
const selectInput = document.querySelector('#number')
const selectSubmit = document.querySelector('#submit') 
const resultDiv = document.querySelector('.result')


selectSubmit.addEventListener('click', (event) => {
  
  fetch(`${base_url}${selectElement.value}`)
  .then (promise => promise.json()) 
  .then (function(data) {
    //console.log(data)
    //console.log(selectInput.value)
    resultDiv.textContent = parseFloat(selectInput.value) * data.rates[selectElement2.value]
  })
})










