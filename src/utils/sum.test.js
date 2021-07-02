import { sum, sumWithDataFetch } from "./sum";

import * as fetchData from "./fetchData";

// jest.mock("./fetchData", () => () => {
//   console.log("mock fetchData");
// });

describe("sum", () => {
  it("adds 2 and 5", () => {
    expect(sum(2, 5)).toBe(7);
  });

  it("adds 4 and 7", () => {
    expect(sum(4, 7)).toBe(11);
  });

  it("returns NaN when passed NaN", () => {
    expect(sum(NaN, 7)).toBe(NaN);
  });
});

describe("sumWithDataFetch", () => {
  let fetchDataSpy;

  beforeEach(() => {
    fetchDataSpy = jest.spyOn(fetchData, "default");
  });

  it("adds 2 and 5", () => {
    expect(sumWithDataFetch(2, 5)).toBe(7);
  });

  it("calls fetchData", () => {
    sumWithDataFetch(2, 5);

    expect(fetchDataSpy).toHaveBeenCalledTimes(1);
  });

  it("calls fetchData second time", () => {
    sumWithDataFetch(2, 5);

    expect(fetchDataSpy).toHaveBeenCalledTimes(1);
  });

  it("calls provided callback", () => {
    // arrange
    const func = jest.fn(() => {});

    // act
    sumWithDataFetch(2, 5, func);

    // assert
    expect(func).toHaveBeenCalledTimes(1);
  });
});
