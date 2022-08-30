export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(number / 100);
};

export const getUniqueValues = () => {};
