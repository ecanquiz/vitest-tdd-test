import { mount } from '@vue/test-utils'
import Component from '@/components/vtu/FormHandling/InteractingWithFormElements.vue'

test('sets the value', async () => {
  const wrapper = mount(Component)
  const input = wrapper.find('input')

  await input.setValue('my@mail.com')

  expect(input.element.value).toBe('my@mail.com')
})

test('trigger', async () => {
  const wrapper = mount(Component)

  // trigger the element
  await wrapper.find('button').trigger('click')

  // assert some action has been performed, like an emitted event.
  expect(wrapper.emitted()).toHaveProperty('submit')
})

test('emits the input to its parent', async () => {
  const wrapper = mount(Component)

  // set the value
  await wrapper.find('input').setValue('my@mail.com')

  // trigger the element
  await wrapper.find('button').trigger('click')

  // assert the `submit` event is emitted,
  expect(wrapper.emitted('submit')[0][0]).toBe('my@mail.com')
})


