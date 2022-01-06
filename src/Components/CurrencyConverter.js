import ExchangeRate from "./ExchangeRate";
import {useState} from 'react'
import axios from "axios";

function CurrencyConverter() {

  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD')
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(0)
  const [result, setResult] = useState(0)

  const convert = (e) => {
    e.preventDefault();
    
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        * amount)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  console.log(ExchangeRate)

/*   console.log(chosenPrimaryCurrency)
  console.log(chosenSecondaryCurrency)
  console.log(amount, convert) */
  return (
    <div>
      <h3 className="font-bold text-center py-7">Currency Converter</h3>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3 py-3"
              htmlFor="from"
            >
              From:
              <select
                value={chosenPrimaryCurrency}
                name="currency-option-1"
                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                className="mx-3"
              >
                {currencies.map((currency, _index) => (
                  <option key={_index}>{currency}</option>
                ))}
              </select>
            </label>

            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="amount"
            >
              Amount:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="currency-amount-1"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3 py-3"
              htmlFor="from"
            >
              To:
              <select
                value={chosenSecondaryCurrency}
                name="currency-option-2"
                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                className="mx-3"
              >
                {currencies.map((currency, _index) => (
                  <option key={_index}>{currency}</option>
                ))}
              </select>
            </label>

            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="amount"
            >
              Converted Amount:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="currency-amount-2"
              type="number"
              value={result}
              disabled={true}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <button
              onClick={convert}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Convert
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="result w-full px-3 mb-6 md:mb-0">
            <h2 className="text-center text-5xl">
              <ExchangeRate exchangeRate={exchangeRate} />
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CurrencyConverter
