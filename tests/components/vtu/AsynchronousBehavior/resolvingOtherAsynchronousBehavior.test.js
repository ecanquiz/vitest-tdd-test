import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'

const AxiosComponent = {
  template: '<div>{{ data }}</div>',
  data() {
    return { data: '' }
  },
  async mounted() {
     this.data = await axios.get('/data.json').then(resp => resp.data);
  }
}

// jest.mock('axios', () => ({
//   get: () => Promise.resolve({ data: 'some mocked data!' })
// }))

axios.get = vi.fn().mockResolvedValue({ data: 'some mocked data!' })

test('uses a mocked axios HTTP client and flushPromises', async () => {
  // some component that makes a HTTP called in `mounted` using `axios`
  const wrapper = mount(AxiosComponent)

  await flushPromises() // axios promise is resolved immediately
  
  // after the line above, axios request has resolved with the mocked data.    
  expect(wrapper.get('div').text()).toEqual('some mocked data!')  
})
