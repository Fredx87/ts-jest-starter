import { sum } from "./sum";

test("add 1 + 2 should return 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
