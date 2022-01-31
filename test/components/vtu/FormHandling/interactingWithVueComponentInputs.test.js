import { mount } from '@vue/test-utils'
import CustomInput from '@/components/vtu/FormHandling/InteractingWithVueComponentInputs.vue'

test('fills in the form', async () => {
  const wrapper = mount(CustomInput)

  await wrapper.find('.text-input input').setValue('text')

  // continue with assertions or actions like submit the form, assert the DOM…
})

test('sets the value', async () => {
  const wrapper = mount(CustomInput)
  const input = wrapper.find('.text-input input')

  await input.setValue('text')

  expect(input.element.value).toBe('text')
})

