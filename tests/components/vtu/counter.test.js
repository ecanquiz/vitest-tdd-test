import { mount } from '@vue/test-utils'
import Counter from '@/components/vtu/Counter.vue'

/* Notice how here we're updating its internal data,
 * and we also rely on details (from a user perspective)
 * such as CSS classes.
 */
test('counter text updates', async () => {
  const wrapper = mount(Counter)
  const paragraph = wrapper.find('.paragraph')

  expect(paragraph.text()).toBe('Times clicked: 0')

  await wrapper.setData({ count: 2 })

  expect(paragraph.text()).toBe('Times clicked: 2')
})

/* TIP
 *
 * Notice that changing either the data 
 * or the CSS class name would make the test fail.
 * The component would still work as expected, though.
 * This is known as a false positive.
 * 
 * Instead, the following test tries to stick
   with the inputs and outputs listed above:
 */

test('text updates on clicking', async () => {
  const wrapper = mount(Counter)

  expect(wrapper.text()).toContain('Times clicked: 0')

  const button = wrapper.find('button')
  await button.trigger('click')
  await button.trigger('click')

  expect(wrapper.text()).toContain('Times clicked: 2')
})
