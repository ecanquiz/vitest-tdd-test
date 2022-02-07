import { mount, config } from '@vue/test-utils'
import DataTestIdPlugin from './DataTestIdPlugin.js'
import MyComponent from '@/components/vtu/Plugins/MyComponent.vue'

config.plugins.VueWrapper.install(DataTestIdPlugin)

test('data test id plugin', () => {
  const wrapper = mount(MyComponent, {
    global: {
      plugins: [DataTestIdPlugin]
    }
  })
  
  const dataTestId = wrapper.findByTestId('name-input') // returns a VueWrapper or DOMWrapper
    
  expect(dataTestId.html()).toBe(`<input data-testid="name-input">`)
  
})
