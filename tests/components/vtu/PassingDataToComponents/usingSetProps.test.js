import { mount } from '@vue/test-utils'
import Show from '@/components/vtu/PassingDataToComponents/Show.vue'

test('renders a greeting when show is true', async () => {
  const wrapper = mount(Show)
  expect(wrapper.html()).toContain('Hello')

  await wrapper.setProps({ show: false })

  expect(wrapper.html()).not.toContain('Hello')
})
