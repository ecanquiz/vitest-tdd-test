import { mount } from '@vue/test-utils'

const Foo = {
  props: ['msg'],
  template: `<span>{{ msg }}</span>`
}

const Comp = {
  components: { Foo },
  template: `<div><foo :msg="'hello world'" /></div>`
}

test('asserts correct props are passed', () => {
  const wrapper = mount(Comp)

  expect(wrapper.getComponent(Foo).vm.msg).toBe('hello world')
  expect(wrapper.getComponent(Foo).props()).toEqual({ msg: 'hello world' })
  expect(wrapper.getComponent(Foo).get('span').text()).toContain('hello world')
})

