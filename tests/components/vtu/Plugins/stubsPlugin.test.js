import { mount, config } from '@vue/test-utils'
import { defineComponent } from 'vue'

const Component = {template:"<div><ChildComponent /></div>" }

config.plugins.createStubs = ({ name, component }) => {
  return defineComponent({
    render: () => h(`custom-${name}-stub`)
  })
}

test.skip('stubs plugin', () => {  
  const wrapper = mount(Component, {
    global: {
      stubs: {
        ChildComponent: { template: '<child-stub/>' }
      },
    },
  })
  
  console.log( wrapper.html())    
})
