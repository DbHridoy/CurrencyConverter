import React, { useEffect, useState } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});
  currency = currency.toLowerCase();
  //   console.log(currency);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => {
        //   console.log(res);

        return res.json();
      })
      .then((res) => {
        // console.log(res[currency]);
        return setData(res[currency]);
      });
  }, [currency]);
  //   console.log(data);

  return data;
}

export default useCurrency;
