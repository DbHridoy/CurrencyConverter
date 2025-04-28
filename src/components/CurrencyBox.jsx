// import React, { useState } from "react";

function CurrencyBox({
  label,
  options = [],
  fieldDisabled = false,
  currency = "USD",
  onCurrencyChange,
  amount,
  onAmountChange,
}) {
  //  [amount, setAmount] = useState(amount);
  // console.log(options);

  // const changeAmount = (e) => {
  //   setAmount(e.target.value);
  // };

  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
          <label className="text-black/40 mb-2 inline-block">{label}</label>
          <input
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={onAmountChange}
            disabled={fieldDisabled}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={currency.toLowerCase()}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            // onChange={onAmountChange}
          >
            {options.map((cur) => {
              // console.log(cur);
              return (
                <option key={cur} value={cur}>
                  {cur.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default CurrencyBox;
