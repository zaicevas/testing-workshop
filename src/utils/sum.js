import fetchData from "./fetchData";

export const sum = (a, b) => a + b;

export const sumWithDataFetch = (a, b, func) => {
  fetchData();
  if (typeof func === "function") func();

  return a + b;
};
