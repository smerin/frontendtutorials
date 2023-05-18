import { formatDate } from "./formatDate";

describe("formatCurrency", () => {
  test("formats a past date correctly", () => {
    expect(formatDate("2023-01-01")).toBe("January 1, 2023");
  });

  test("formats a future date correctly", () => {
    expect(formatDate("2028-12-25")).toBe("December 25, 2028");
  });

  test("returns an empty string with invalid month", () => {
    expect(formatDate("2023-13-01")).toBe("");
  });

  test("returns an empty string with invalid day", () => {
    expect(formatDate("2023-02-33")).toBe("");
  });

  test("returns an empty string with invalid string input", () => {
    expect(formatDate("xmas day")).toBe("");
  });
});
