import { mount } from '@vue/test-utils'
import Component from '@/components/vtu/Component.vue'

test('works with transitions', async () => {
  const wrapper = mount(Component)

  expect(wrapper.find('hello').exists()).toBe(false)

  await wrapper.find('button').trigger('click')

  // After clicking the button, the <p> element exists and is visible
  expect(wrapper.get('p').text()).toEqual('hello')
})
