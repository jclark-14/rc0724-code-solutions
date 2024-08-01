import { numberRange } from '../../04-recursion/08-number-range/number-range';

type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const cost = products.map((product): number => {
    return product.price * product.quantity;
  });
  const totalCost = cost.reduce((total, num) => {
    return total + num;
  }, 0);
  return totalCost * (1 + taxRate / 100);
}
