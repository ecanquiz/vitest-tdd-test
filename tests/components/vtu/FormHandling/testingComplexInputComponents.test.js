import { mount } from '@vue/test-utils'
import Component from '@/components/vtu/FormHandling/TestingComplexInputComponents.vue'
import Foo from '@/components/vtu/FormHandling/Foo.vue'

test('findComponent', () => {
  const wrapper = mount(Component)

  // All the following queries would return a VueWrapper

  wrapper.findComponent('.foo')
  wrapper.findComponent('[data-test="foo"]')

  wrapper.findComponent({ name: 'Foo' })

  wrapper.findComponent({ ref: 'foo' })

  wrapper.findComponent(Foo)
})

/* 
 WARNING
 If ref in component points to HTML element, findComponent will return empty wrapper. This is intended behaviour
*/
