'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const halfPrice = prices.map((num) => {
  return { price: num, salePrice: num / 2 };
});
console.log('Price objects ', halfPrice);
const formattedPrices = prices.map((num) => {
  const formatted = num.toFixed(2);
  return `$${formatted}`;
});
console.log('Formatted prices', formattedPrices);
