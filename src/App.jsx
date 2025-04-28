import { useState } from "react";
// import { useEffect } from "react";
import "./App.css";
import CurrencyBox from "./components/CurrencyBox";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BDT");
  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);

  const cur = useCurrency(from);
  // console.log(cur);
  const options = Object.keys(cur);
  // console.log(options);

  const handleSwap = () => {
    // const f = from;
    setFrom(to);
    setTo(from);
    // changeOnSwap(f)
    setAmountTo(amountFrom / cur[to.toLowerCase()]);

    // console.log("from: " ,from);
    // console.log("to: " ,to);
    // console.log("from": from);
  };
  // const changeOnSwap=(f)=>{
  //   console.log(f);

  //   setAmountTo(amountFrom*cur[f.toLowerCase()])
  // }

  // useEffect(() => {
  //   setAmountTo(amountFrom * cur[to.toLowerCase()]);
  // }, [from, to, amountFrom, cur]);

  const handleAmountChange = (e) => {
    setAmountFrom(e.target.value);
  };

  const handleConvert = () => {
    setAmountTo(amountFrom * cur[to.toLowerCase()]);
    // console.log(amountFrom);
    // console.log(cur);
    // console.log(to);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <CurrencyBox
                  label="From"
                  currency={from}
                  options={options}
                  fieldDisabled={false}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  amount={amountFrom}
                  onAmountChange={handleAmountChange}
                ></CurrencyBox>
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={handleSwap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <CurrencyBox
                  label="To"
                  currency={to}
                  options={options}
                  fieldDisabled={true}
                  onCurrencyChange={(currency) => setTo(currency)}
                  amount={amountTo}
                  // onAmountChange={handleAmountChange}
                ></CurrencyBox>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={handleConvert}
              >
                Convert {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
