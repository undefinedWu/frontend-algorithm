import { is_palindrome } from '../is_palindrome'

it('is_palindrome', () => {
  expect(is_palindrome('aba')).toBeTruthy()
  expect(is_palindrome('cav')).toBeFalsy()
})
