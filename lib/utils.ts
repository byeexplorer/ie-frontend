export const formatToDate = (date: Date) => {
  const month = date.getMonth() < 9 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();

  return `${date.getFullYear()}.${month}.${day}`;
};
