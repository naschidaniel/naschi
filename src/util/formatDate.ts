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
