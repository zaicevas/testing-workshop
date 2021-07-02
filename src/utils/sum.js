import fetchData from "./fetchData";

export const sum = (a, b) => a + b;

export const sumWithDataFetch = (a, b) => {
  fetchData();
  return a + b;
};
