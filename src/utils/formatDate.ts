export function formatDate(date: string): string {
  const dateStamp = new Date(date);

  return !isNaN(dateStamp.getTime())
    ? new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
      }).format(new Date(dateStamp))
    : "";
}
