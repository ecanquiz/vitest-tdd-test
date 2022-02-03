import { mount } from '@vue/test-utils'

const Layout = {
  template: `
    <div>
      <h1>Welcome!</h1>
      <main>
        <slot />
      </main>
      <footer>
        Thanks for visiting.
      </footer>
    </div>
  `
}

test('layout default slot', () => {
  const wrapper = mount(Layout, {
    slots: {
      default: 'Main Content'
    }
  })

  expect(wrapper.html()).toContain('Main Content')
})

test('layout default slot', () => {
  const wrapper = mount(Layout, {
    slots: {
      default: 'Main Content'
    }
  })

  expect(wrapper.find('main').text()).toContain('Main Content')
})

test('layout full page layout', () => {
  const wrapper = mount(Layout, {
    slots: {
      default: [
        '<div id="one">One</div>',
        '<div id="two">Two</div>'
      ]
    }
  })

  expect(wrapper.find('#one').exists()).toBe(true)
  expect(wrapper.find('#two').exists()).toBe(true)
})
