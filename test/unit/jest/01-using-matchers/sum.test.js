import sum from '@/js/sum';

test('sumar 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
