import { defineComponent, ref, onMounted } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'

const Async = defineComponent({
  template: '<div>{{ data }}</div>',
  async setup() {
    // await something
    const data = ref('')
    onMounted(async () => {
      data.value = await axios.get('/data.json').then(resp => resp.data)
    })
    return {
      data
    }
  }
})

axios.get = vi.fn().mockResolvedValue({ data: 'some mocked data!' })

test('Async component', async () => {
  const TestComponent = defineComponent({
    components: { Async },
    template: '<Suspense><Async/></Suspense>'
  })

  const wrapper = mount(TestComponent)
    
  await flushPromises()
  
  // ...  
  await expect(wrapper.get('div').text()).toEqual('some mocked data!')  
})

