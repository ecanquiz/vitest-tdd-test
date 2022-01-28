import axios from 'axios';
import Users from '@/js/jest/users';

//vi.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  //axios.get.mockResolvedValue(resp);
  axios.get = vi.fn().mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get = vi.fn().mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
