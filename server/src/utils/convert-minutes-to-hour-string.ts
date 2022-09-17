export function convertMinutesToHourString(minutesAmount: string) {
  const num = parseInt(minutesAmount);
  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
