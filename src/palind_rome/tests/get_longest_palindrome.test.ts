import { get_longest_palindrome } from '../get_longest_palindrome'

it('get_longest_palindrome', () => {
  expect(get_longest_palindrome('cab')).toMatch(/a|b|c/)
  expect(get_longest_palindrome('acaba')).toMatch(/(aba|aca)/)
})
