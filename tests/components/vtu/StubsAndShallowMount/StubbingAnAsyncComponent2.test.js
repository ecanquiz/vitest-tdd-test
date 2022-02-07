import { mount, flushPromises,  } from '@vue/test-utils'
import { defineComponent, defineAsyncComponent } from "vue"

const App = defineComponent({
  components: {
    AsyncComponent: defineAsyncComponent(() => import('@/components/vtu/AsyncComponent'))
  },
  template: '<AsyncComponent/>'
})

test('stubs async component with resolving', async () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        AsyncComponent: true
      }
    }
  })

  await flushPromises()

  expect(wrapper.html()).toBe('<async-component-stub></async-component-stub>')
})
