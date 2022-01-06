import CurrencyConverter from "./Components/CurrencyConverter";
import NewsFeed from "./Components/NewsFeed";

function App() {
    return (
      <div>
        <h1
          className="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400  p-4 px-3 py-10 bg-gray-200 text-center font-bold text-center
            text-4xl
            mb-6"
        >
          Crypto-Converter Dashboard
        </h1>

        <div className="flex justify-center">
          <CurrencyConverter />
        </div>
        <div className="flex justify-center">
          <NewsFeed />
        </div>
      </div>
    );
}

export default App;
