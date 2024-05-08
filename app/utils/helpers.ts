import { CURRENCY } from "@config/constant"

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
    const baseAmount = amount / CURRENCY[fromCurrency]
    const convertedAmount = baseAmount * CURRENCY[toCurrency]
    return convertedAmount.toFixed(2);
}