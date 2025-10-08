export const phone = {
  value: /^\+?[1-9]\d{1,14}$/,
  message: "Phone number must be expression : +49 xx xx xx xx",
};

export const email = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Email mast have @ and not have space",
};
