import fetchData from '@/js/callback/fetchData';

test('the data is peanut butter', async done => {
  function callback(data) {
    try {      
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
}, 30000);


