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
  beforeEach(() => {
    jest.spyOn(fetchData, "default").mockImplementation(() => {
      console.log("mock fetchData");
    });
  });

  it("adds 2 and 5", () => {
    expect(sumWithDataFetch(2, 5)).toBe(7);
  });
});
