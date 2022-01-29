test('should save without error', () => {
  var foo = 'bar' , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
  assert.typeOf(foo, 'string'); // without optional message
  //assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
  assert.equal(foo, 'bar');
  //assert.equal(foo, 'bar', 'foo equal `bar`');
  assert.lengthOf(foo, 3);
  //assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
  assert.lengthOf(beverages.tea, 3);
  //assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');  
});


test('should save without error', () => {
  var foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
  expect(foo).to.be.a('string');
  expect(foo).to.equal('bar');
  expect(foo).to.have.lengthOf(3);
  expect(beverages).to.have.property('tea').with.lengthOf(3);
});

test('should save without error', () => {
  var answer = 43;

  // AssertionError: expected 43 to equal 42.
  expect(answer).to.equal(43);//42

  // AssertionError: topic [answer]: expected 43 to equal 42.
  //expect(answer, 'topic [answer]').to.equal(42);
});

/*test('should save without error', () => {
var foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);
});*/
