export class PreSum {

  sum_array: number[];
  input: number[]

  constructor(input: number[]) {
    this.input = input;
    this.sum_array = new Array(input.length + 1);
    this.sum_array[0] = 0;
    for (let i = 1; i < this.sum_array.length; i++) {
      this.sum_array[i] = this.sum_array[i - 1] + input[i - 1]
    }
  }

  get_range_sum(left: number, right: number): number {
    if (left < 0 || right < 0 || left > this.input.length || right > this.input.length || left > right) {
      throw new Error("invalid range")
    }
    return this.sum_array[right + 1] - this.sum_array[left]
  }
}