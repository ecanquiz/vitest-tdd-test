import { mount } from '@vue/test-utils'

const Comp = {
  template: `<div>{{ msg1 }} {{ msg2 }}</div>`,
  props: ['msg1'],
  data() {
    return {
      msg2: 'world'
    }
  }
}
  
test('renders a greeting', () => {

  const wrapper = mount(Comp, {
    props: {
      msg1: 'hello'
    }
  })

  // Let's take a look at what's available on vm by with:
  // console.log(wrapper.vm)

  expect(wrapper.html()).toContain('hello world')
})


