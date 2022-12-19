export const convertToSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const numberWithCommas = (number: number | string) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
