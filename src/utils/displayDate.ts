function firstLetterToUppercase(string: string) {
  return !string ? string : string[0].toUpperCase() + string.slice(1);
}

export function displayLongDate(data: string | number | Date) {
  const date = new Date(data);
  const month = firstLetterToUppercase(date.toLocaleString("default", { month: "long" }).slice(0, 3));
  const day = date.getDate();
  const fullYear = date.getFullYear();
  return `${month} ${day}, ${fullYear}`;
}
