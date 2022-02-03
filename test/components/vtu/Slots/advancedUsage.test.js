import { h } from 'vue'
import { mount } from '@vue/test-utils'
import Header from '@/components/vtu/Header.vue'

const Layout = {
  template: `
    <div>
      <header>
        <slot name="header" />
      </header>
      <main>
        <slot name="main" />
      </main>
      <aside>
        <slot name="sidebar" />
      </aside>
      <footer>
        <slot name="footer" />
      </footer>
    </div>
  `
}

test('layout full page layout', () => {
  const wrapper = mount(Layout, {
    slots: {
      header: Header,
      main: h('div', 'Main Content'),
      sidebar: { template: '<div>Sidebar</div>' },
      footer: '<div>Footer</div>',
    }
  })

  expect(wrapper.html()).toContain('<div>Header</div>')
  expect(wrapper.html()).toContain('<div>Main Content</div>')
  expect(wrapper.html()).toContain('<div>Sidebar</div>')
  expect(wrapper.html()).toContain('<div>Footer</div>')
})
