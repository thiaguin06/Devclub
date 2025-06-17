/*const button = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value.replace(',', '.');
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
  const currencyValueConverted = document.querySelector('.currency-value');

  console.log(currencySelect.value);
  const dolarToday = 5.25;
  const euroToday = 6.5;




if(currencySelect.value === 'dolar'){
  const formattedUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect.value === 'euro'){
  currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(inputCurrencyValue / euroToday)
  }
}

  // Formatações com Intl.NumberFormat:
  const formattedBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputCurrencyValue);


  currencyValueToConvert.innerHTML = formattedBRL;
  currencyValueConverted.innerHTML = formattedUSD;

  console.log(convertedValue);

button.addEventListener('click', convertValues); */

/*const button = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value.replace(',', '.');
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
  const currencyValueConverted = document.querySelector('.currency-value');

  console.log(currencySelect.value);
  const dolarToday = 5.25;
  const euroToday = 6.5;

  let formattedUSD = '';  // Corrigido: inicializa fora do if
  let convertedValue = 0; // Corrigido: inicializa fora do if

  if (currencySelect.value == 'dolar') {
    convertedValue = inputCurrencyValue / dolarToday;
    formattedUSD = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(convertedValue);
  }

  if (currencySelect.value == 'euro') {
    convertedValue = inputCurrencyValue / euroToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(convertedValue);
  }

  // Formatações com Intl.NumberFormat:
  const formattedBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputCurrencyValue);

  currencyValueToConvert.innerHTML = formattedBRL;

  // Corrigido: só usa formattedUSD se for dólar
  if (currencySelect.value === 'dolar') {
    currencyValueConverted.innerHTML = formattedUSD;
  }

  console.log(convertedValue);
}

function changeCurrency(){
 let currencyName = document.getElementById('currency-name');
 let currencyImg = document.querySelector('currency-img');

if(currencySelect.value == 'dolar'){
  currencyName.innerHTML = 'Dolar americano'
  currencyImg.src = "../Javascript/imagem/eua.png"
}
if(currencySelect.value == 'euro'){
  currencyName.innerHTML = 'Euro'
  currencyImg.src = "./Javascript/imagem/euro.png"
}
}

currencySelect.addEventListener('change', changeCurrency);
button.addEventListener('click', convertValues); */



const button = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value.replace(',', '.');
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
  const currencyValueConverted = document.querySelector('.currency-value');

  console.log(currencySelect.value);
  const dolarToday = 5.25;
  const euroToday = 6.5;

  let formattedUSD = '';  // Inicializa fora do if
  let convertedValue = 0; // Inicializa fora do if

  if (currencySelect.value == 'dolar') {
    convertedValue = inputCurrencyValue / dolarToday;
    formattedUSD = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(convertedValue);
  }

  if (currencySelect.value == 'euro') {
    convertedValue = inputCurrencyValue / euroToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(convertedValue);
  }

  const formattedBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputCurrencyValue);

  currencyValueToConvert.innerHTML = formattedBRL;

  if (currencySelect.value === 'dolar') {
    currencyValueConverted.innerHTML = formattedUSD;
  }

  console.log(convertedValue);
}

function changeCurrency(){
  let currencyName = document.getElementById('currency-name');
  let currencyImg = document.querySelector('.currencyImg');  // Corrigido seletor

  if(currencySelect.value == 'dolar'){
    currencyName.innerHTML = 'Dólar americano';
    currencyImg.src = "../Javascript/imagem/eua.png";  // Corrigido caminho
  }
  if(currencySelect.value == 'euro'){
    currencyName.innerHTML = 'Euro';
    currencyImg.src = "../Javascript/imagem/euro.png";  // Corrigido caminho
  }

  convertValues()

}

currencySelect.addEventListener('change', changeCurrency);
button.addEventListener('click', convertValues);
