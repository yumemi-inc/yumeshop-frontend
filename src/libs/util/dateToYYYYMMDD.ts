export const dateToYYYYMMDD = (date: Date, separator = '/') => {
  const yearStr = String(date.getFullYear());
  const monthStr = String(date.getMonth() + 1);
  const dateStr = String(date.getDate());

  return [
    yearStr.padStart(4, '0'),
    monthStr.padStart(2, '0'),
    dateStr.padStart(2, '0'),
  ].join(separator);
};
