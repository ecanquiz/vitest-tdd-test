import foo from '@/js/foo';

test('mock simulation implementations', () => {
  const myMockFn = vi.fn(cb => cb(null, true));  

  expect(myMockFn((err, val) => val)).toBe(true);
});

test('foo is a mock function', () => {
  vi.mock('@/js/foo'); // this happens automatically with automocking    

  // foo is a mock function
  foo.mockImplementation(() => 42);    
  expect(foo()).toBe(42);
});

test('mock implementation once', () => {
  const myMockFn = vi
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));
  
  expect(myMockFn((err, val) => val)).toBe(true);
  expect(myMockFn((err, val) => val)).toBe(false);
});

test('mocked function it will execute the default', () => {
    const myMockFn = vi
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
      .mockImplementationOnce(() => 'second call');

    expect(myMockFn()).toBe('first call');
    expect(myMockFn()).toBe('second call');
    expect(myMockFn()).toBe('default');
    expect(myMockFn()).toBe('default');
});

test('mock return this', () => {
  const myObj = {
    myMethod: vi.fn().mockReturnThis(),
  };

  // is the same as

  const otherObj = {
    myMethod: vi.fn(function () {
      return this;
    })
  };

  expect(JSON.stringify(myObj)).toEqual(JSON.stringify(otherObj));
});



