import { mount } from '@vue/test-utils'
import { createStore, useStore} from 'vuex'
import { computed } from 'vue'

const App = {
  template: `
    <div>
      <button @click="increment" />
      Count: {{ count }}
    </div>
  `,
  setup () {
    const store = useStore()
    const count = computed(() => store.state.count)
    const increment = () => store.commit('increment')    
    
    return { count, increment }
  }
}

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  }
})

test('vuex', async () => {
  const wrapper = mount(App, {
    global: {
      //plugins: [ store ],
      provide: { store }
    }
  })

  await wrapper.find('button').trigger('click')  

  expect(wrapper.html()).toContain('Count: 1')
})
