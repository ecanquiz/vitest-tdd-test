import * as City from '@/js/jest/City';

beforeAll(() => {
  City.initializeDatabase();
});

afterAll(() => {
  City.clearDatabase();
});

test('city database has Vienna', () => {
  expect(City.isIt('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(City.isIt('San Juan')).toBeTruthy();
});
