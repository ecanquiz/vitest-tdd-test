import { config, mount } from '@vue/test-utils'

const CustomButton = {
  template: `
    <button>
      <slot />
    </button>
  `
}

const AnotherApp = {
  props: ['authenticated'],
  components: { CustomButton },
  template: `
    <custom-button>
      <div v-if="authenticated">Log out</div>
      <div v-else>Log in</div>
    </custom-button>
  `
}

beforeAll(() => {
  config.renderStubDefaultSlot = true
})

afterAll(() => {
  config.renderStubDefaultSlot = false
})

test('shallow with stubs 1', () => {
  const wrapper = mount(AnotherApp, {
    props: {
      authenticated: true
    },
    shallow: true
  })

  expect(wrapper.html()).toContain('Log out')
})

test('shallow with stubs 2', () => {
  const wrapper = mount(AnotherApp, {
    props: {
      authenticated: false
    },
    shallow: true
  })

  expect(wrapper.html()).toContain('Log in')
})
