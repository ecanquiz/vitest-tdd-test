test.only('exploring a mock property', () => {
  const myMock = vi.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  expect(JSON.stringify(myMock.mock.instances)).toBe(JSON.stringify([{},{}]));
  // > [ <a>, <b> ]
});

test('more exploring mock properties', () => {
    const myMock = vi.fn();    
    
    const a = new myMock('first arg', 'second arg');

    // The function was called exactly once
    expect(myMock.mock.calls.length).toBe(1);

    // The first arg of the first call to the function was 'first arg'
    expect(myMock.mock.calls[0][0]).toBe('first arg');

    // The second arg of the first call to the function was 'second arg'
    expect(myMock.mock.calls[0][1]).toBe('second arg');
    
    // This function was instantiated exactly once
    expect(myMock.mock.instances.length).toBe(2);
});

test('mock return value', () => {
    const myMock = vi.fn();

    myMock.mockReturnValueOnce('return value').mockReturnValueOnce('return another value').mockReturnValueOnce({name});    
    
    const a = myMock();
    // The return value of the first call to the function was 'return value'
    expect(myMock.mock.results[0].value).toBe('return value');
    
    const b = myMock();       
    // The return value of the second call to the function was 'return another value'
    expect(myMock.mock.results[1].value).toBe('return another value');
    
    // This function was instantiated exactly twice
   expect(myMock.mock.instances.length).toBe(2);
   
   const c = myMock();
   c.name = 'test';   
   
   // The object returned by the first instantiation of this function
   // had a `name` property whose value was set to 'test'   
   // jest ===>>>> expect(myMock.mock.instances[0].name).toEqual('test');   
   expect(c.name).toEqual('test');
});

test('more mock return value', () => {
    const myMock = vi.fn();
  
    const a = myMock();
    expect(myMock.mock.results[0].value).toBe(undefined);

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    
    const b = myMock();
    expect(myMock.mock.results[1].value).toBe(10);

    const c = myMock();
    expect(myMock.mock.results[2].value).toBe('x');

    const d = myMock();
    expect(myMock.mock.results[3].value).toBe(true);

    const e = myMock();
    expect(myMock.mock.results[3].value).toBe(true);
});

test.only('mock filter', () => {    
    const filterTestFn = vi.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    //console.log(result); // > [11]
    expect(result).toEqual([11]);
    
    //console.log(filterTestFn.mock.calls[0][0]); // 11
    expect(filterTestFn.mock.calls[0][0]).toBe(11);
    
    //console.log(filterTestFn.mock.calls[1][0]); // 12
    expect(filterTestFn.mock.calls[1][0]).toBe(12);    
});
