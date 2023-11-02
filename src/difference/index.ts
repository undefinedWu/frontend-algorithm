export class Difference {
  diff: number[]
  origin: number[]

  constructor(list: number[]) {
    this.diff = Array.from({ length: list.length })
    this.origin = list
    this.init_difference_list()
  }

  private init_difference_list() {
    const origin_list = this.origin
    if (origin_list.length === 0)
      return

    this.diff[0] = origin_list[0]

    for (let i = 1; i < origin_list.length; i++)
      this.diff[i] = origin_list[i] - origin_list[i - 1]
  }

  update(start_index: number, end_index: number, num: number) {
    if (start_index < 0 && end_index < 0 && start_index > this.diff.length && end_index > this.diff.length && start_index > end_index)
      throw new Error('invalid range')

    this.diff[start_index] += num
    if (end_index + 1 < this.diff.length)
      this.diff[end_index + 1] -= num
  }

  get_result(): number[] {
    this.origin[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++)
      this.origin[i] = this.diff[i] + this.origin[i - 1]

    return this.origin
  }
}
