import User from '@/js/mocha/callback/User';

describe('User', () => {
  describe('#save()', () => {
    it('should save without error', done => {
      const user = new User('Luna');
      user.save(err => err ? done(err): done());
    });
  });
});


