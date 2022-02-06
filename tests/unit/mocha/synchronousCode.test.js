describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      // [1, 2, 3].indexOf(5).should.equal(-1);
      // [1, 2, 3].indexOf(0).should.equal(-1);      
     expect([1, 2, 3].indexOf(5)).toEqual(-1);
     expect([1, 2, 3].indexOf(0)).toEqual(-1);
    });
  });
});

// Arrow Functions
describe('my suite', () => {
  it('my test', async () => {
    // should set the timeout of this test to 1000 ms; instead will fail
    //this.timeout(1000);
    assert.ok(true);
  }, 1000);
});

describe('hooks', function() {
  beforeAll(function() {
    // runs once before the first test in this block
  });

  afterAll(function() {
    // runs once after the last test in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});


