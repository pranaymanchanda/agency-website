// Kuwaiti Dinar uses 3 decimal places.
export function formatKWD(amount: number): string {
  return `${amount.toFixed(3)} KWD`;
}
