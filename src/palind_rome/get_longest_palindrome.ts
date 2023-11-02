export function get_longest_palindrome(str: string): string {
  if (str.length <= 1)
    return str

  let longest_result = ''
  for (let i = 0; i < str.length; i++) {
    const palindrome_needle_odd = get_valid_palindrome(str, i, i)
    const palindrome_needle_even = get_valid_palindrome(str, i, i + 1)

    longest_result = get_longest_str(longest_result, palindrome_needle_even, palindrome_needle_odd)
  }

  return longest_result
}

function get_valid_palindrome(str: string, left: number, right: number): string {
  while (
    left > 0
    && right < str.length
    && str[left] === str[right]
  ) {
    left--
    right++
  }

  return str.substring(left + 1, right)
}

function get_longest_str(str1: string, str2: string, str3: string): string {
  let result = str1
  result = result.length > str2.length ? result : str2
  result = result.length > str3.length ? result : str3

  return result
}
