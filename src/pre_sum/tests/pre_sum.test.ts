import { PreSum } from '..'

test("pre_sum", () => {
  const instance = new PreSum([1, 2, 3, 4, 5]);
  
  expect(instance.get_range_sum(1, 2)).toEqual(5)
  expect(instance.get_range_sum(0, 4)).toEqual(15)
  // throw error must be wrapped with function
  expect(() => instance.get_range_sum(-1, 3)).toThrow();
  expect(() => instance.get_range_sum(3, 2)).toThrow("invalid range")
})