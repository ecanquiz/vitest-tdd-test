test('custom matcher functions', () => {
  const mockFunc = vi.fn();  

  mockFunc("arg1", "arg2");
  expect(mockFunc).toHaveBeenCalled();

  // The mock function was called at least once with the specified args
  expect(mockFunc).toHaveBeenCalledWith("arg1", "arg2");

   mockFunc("arg3", "arg4");
  // The last call to the mock function was called with the specified args
  expect(mockFunc).toHaveBeenLastCalledWith("arg3", "arg4");

  // All calls and the name of the mock is written as a snapshot  
  /*Snapshots  1 obsolete
            ↳ test/unit/jest/04-mock-function/commonMatchers.test.js
              · mock simulation implementations 1*/  
  //expect(mockFunc).toMatchSnapshot();
});

test('do this manually whithout sugar', () => {
  const mockFunc = vi.fn().mockName('a mock name');  

  mockFunc("arg1", "arg2");
  // The mock function was called at least once
  expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

  // The mock function was called at least once with the specified args
  expect(mockFunc.mock.calls).toContainEqual(["arg1", "arg2"]);

  mockFunc("arg3", "arg4");
  // The last call to the mock function was called with the specified args
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual(["arg3", "arg4"]);

  // The first arg of the last call to the mock function was `42`
  // (note that there is no sugar helper for this specific of an assertion)
  mockFunc(42, 43);
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

  // A snapshot will check that a mock was invoked the same number of times,
  // in the same order, with the same arguments. También afirmará en el nombre.
  expect(mockFunc.mock.calls[2]).toEqual([42, 43]);
  expect(mockFunc.getMockName()).toBe('a mock name');
});


