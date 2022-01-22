import fetchData from '@/js/promises/fetchData';

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData(false).catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toMatch('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData(false)).rejects.toBe('error');
});

test('the fetch fails with an error', () => {
  return expect(fetchData(false)).rejects.toMatch('error');
});
