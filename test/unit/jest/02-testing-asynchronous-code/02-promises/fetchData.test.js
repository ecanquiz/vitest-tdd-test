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

test('the fetch fails with an error', () => {
  return expect(fetchData(false)).rejects.toBe('error');
});

/////////////////////////////////////////////////////

test('el dato es peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('el dato es peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

//////////////////////////////////////////////////////

test('el fetch falla con un error', () => {
  expect.assertions(1);
  return fetchData(false).catch(e => expect(e).toMatch('error'));
});

test('the fetch fails with an error', () => {
  return expect(fetchData(false)).rejects.toMatch('error');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData(false);
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the fetch fails with an error', async () => {
  await expect(fetchData(false)).rejects.toMatch('error');
});
