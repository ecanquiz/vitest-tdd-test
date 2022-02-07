import { mount, flushPromises,  } from '@vue/test-utils'
import { defineComponent, defineAsyncComponent } from "vue"

const App = defineComponent({
  components: {
    MyComponent: defineAsyncComponent(() => import('@/components/vtu/AsyncComponent'))
  },
  template: '<MyComponent/>'
})

test('stubs async component without resolving', () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        MyComponent: true
      }
    }
  })

  expect(wrapper.html()).toBe('<my-component-stub></my-component-stub>')
})
