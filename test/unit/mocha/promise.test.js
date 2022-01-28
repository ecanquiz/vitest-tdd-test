import User from '@/js/mocha/promise/User';

describe('User', () => {
  describe('#save()', () => {
    it('should save without error', function() {
      var user = new User('Luna');     
      /*user.save(function(err) {
        if (err) console.log(err);
        else console.log(error);
      });*/       
      return user.save() // try `user.save(true)` with error too
        .then(data => console.log(data))
        .catch(error => console.log(error));    
    });
  });
});

