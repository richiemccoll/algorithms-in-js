function maxStockProfit(prices) {
  if (!prices || typeof prices.map !== "function") {
    return new Error("Prices passed in must be an array");
  }

  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < prices.length; i++) {
    if (changeBuyPrice) buyPrice = prices[i];
    sellPrice = prices[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

module.exports.default = maxStockProfit;
