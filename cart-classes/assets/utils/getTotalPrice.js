import { storage } from "./localStorage.js";

export function getTotalPrice (items) {
  let totalPrice = 0
  for (const item of items) {
    totalPrice += item.price
  }
  return totalPrice
}
