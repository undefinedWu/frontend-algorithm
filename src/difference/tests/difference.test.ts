import { Difference } from ".."

test("difference", () => {
  const instance = new Difference([1, 2, -2, 3, 9]);
  instance.update(1, 4, -2);
  expect(instance.get_result()).toEqual([1, 0, -4, 1, 7]);
  instance.update(2, 3, 5);
  expect(instance.get_result()).toEqual([1, 0, 1, 6, 7]);
})