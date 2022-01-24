test('make fun of names', () => {
  const myMockFn = vi
    .fn()
    .mockReturnValue('default')
    //.mockImplementation(scalar => 42 + scalar)
    .mockImplementationOnce(scalar => 42 + scalar)
    .mockName('add42');
  
  myMockFn(2);    
  expect(myMockFn.mock.results[0].value).toBe(44);
  expect(myMockFn.getMockName()).toBe('add42');
    
  myMockFn();    
  expect(myMockFn.mock.results[1].value);
  expect(myMockFn.getMockName()).toBe('add42');
});

