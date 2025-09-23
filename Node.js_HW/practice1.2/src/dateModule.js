export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

export const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours}-${minute}-${seconds}`;
};
