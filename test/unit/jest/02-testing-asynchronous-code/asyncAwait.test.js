import fetchData from '@/js/promises/fetchData';

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData(false);
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toMatch('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData(false)).rejects.toBe('error');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData(false)).rejects.toMatch('error');
});
