export function formatDate(date: Date) {
  const dateFormat = new Intl.DateTimeFormat("de-AT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return date === undefined ? "–" : dateFormat.format(date);
}

export function formatDateTime(date: Date) {
  const dateTimeFormat = new Intl.DateTimeFormat("de-AT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  return date === undefined ? "–" : dateTimeFormat.format(date);
}

export function formatTime(date: Date) {
  const dateTimeFormat = new Intl.DateTimeFormat("de-AT", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return date === undefined ? "–" : dateTimeFormat.format(date);
}

export function compareDates(date1: Date, date2: Date): boolean {
  return date1 === undefined || date2 === undefined
    ? false
    : date1.getTime() > date2.getTime();
}
