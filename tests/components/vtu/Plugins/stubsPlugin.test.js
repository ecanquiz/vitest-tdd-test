import { mount, config } from '@vue/test-utils'
import { defineComponent } from 'vue'

const ChildComponent = { template:"<span />"}

const Component = {template:"<div><slot /></div>" }

config.plugins.createStubs = ({ name, component }) => {
  return defineComponent({
    render: () => h(`custom-${name}-stub`)
  })
}

test('stubs plugin', () => {
  //const wrapper = shallowMount(Component)
  const wrapper = mount(Component, {
    global: {
      stubs: {
        ChildComponent: { template: '<child-stub/>' }
      },
    },
    /*slots: {
      default: [
        ChildComponent        
      ]
    }*/
  })
  
     console.log( wrapper.html())
  //expect(dataTestId.html()).toBe(`<input data-testid="name-input">`)
  
})
