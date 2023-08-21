import { Currency } from "types"

export function getCurrencyCharacter(currency: Currency) {
  switch (currency) {
    case "eur":
      return "€"

    case "usd":
      return "$"
  }

  return "₾"
}