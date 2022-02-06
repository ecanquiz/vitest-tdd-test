import * as City from '@/js/jest/City';

describe('matching cities with each', () => {
  beforeEach(() => {
    City.initializeDatabase();
  });

  afterEach(() => {
    City.clearDatabase();
  });

  test('city database has Vienna', () => {
    expect(City.isIt('Vienna')).toBeTruthy();
  });

  test('city database has San Juan', () => {
    expect(City.isIt('San Juan')).toBeTruthy();
  });
});

describe('matching cities with all', () => {
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
});


