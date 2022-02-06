import { mount } from '@vue/test-utils'
import Component from '@/components/vtu/FormHandling/MultipleModifiersOnTheSameEvent.vue'

test('handles complex events', async () => {
  const wrapper = mount(Component)
  const input = wrapper.find('input')

  await input.trigger('keydown.meta.c.exact.prevent')

  // run your assertions
  expect(wrapper.emitted()).toHaveProperty('capture-copy')
})
