export function is_palindrome(str: string): boolean {
  // if (str.length <= 1) {
  //   return true;
  // }
  let left = 0
  let right = str.length - 1

  while (left <= right) {
    if (!is_equal(str, left, right))
      return false

    left++
    right--
  }
  return true
}

function is_equal(str: string, left: number, right: number): boolean {
  if (left < 0 || right < 0 || left >= str.length || right >= str.length)
    return false

  if (str[left].toLocaleLowerCase() !== str[right].toLocaleLowerCase())
    return false

  return true
}
