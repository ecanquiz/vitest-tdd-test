import { mount } from '@vue/test-utils'
//import { createStore } from 'vuex'

const App = {
  template: `
    <div>
      <button @click="increment" />
      Count: {{ count }}
    </div>
  `,
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}

test('vuex using a mock store', async () => {
  const $store = {
    state: {
      count: 25
    },
    //commit: jest.fn()
    commit: vi.fn()
  }

  const wrapper = mount(App, {
    global: {
      mocks: {
        $store
      }
    }
  })

  expect(wrapper.html()).toContain('Count: 25')
  await wrapper.find('button').trigger('click')
  expect($store.commit).toHaveBeenCalled()  
})
