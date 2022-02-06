import { mount } from '@vue/test-utils'
import { useRouter, useRoute } from 'vue-router'

const Component = {
  template: `<button @click="redirect">Click to Edit</button>`,
  props: ['isAuthenticated'],
  setup (props) {
    const router = useRouter()
    const route = useRoute()

    const redirect = () => {
      if (props.isAuthenticated) {
        router.push(`/posts/${route.params.id}/edit`)
      } else {
        router.push('/404')
      }
    }

    return {
      redirect
    }
  }
}

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {}
  }))
}))

test('allows authenticated user to edit a post', async () => {
  useRoute.mockImplementationOnce(() => ({
    params: {
      id: 1
    }
  }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: true
    },
    global: {
      mocks: {
        // No need for the mocks
      }
    }
  })

  await wrapper.find('button').trigger('click')

  expect(push).toHaveBeenCalledTimes(1)
  expect(push).toHaveBeenCalledWith('/posts/1/edit')
})

test('redirect an unauthenticated user to 404', async () => {
  useRoute.mockImplementationOnce(() => ({
    params: {
      id: 1
    }
  }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

  const wrapper = mount(Component, {
    props: {
      isAuthenticated: false
    }
  })

  await wrapper.find('button').trigger('click')

  expect(push).toHaveBeenCalledTimes(1)
  expect(push).toHaveBeenCalledWith('/404')
})

