export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}