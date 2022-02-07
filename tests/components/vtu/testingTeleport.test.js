import { mount } from '@vue/test-utils'
import Navbar from '@/components/vtu/TestingTeleport/Navbar.vue'
import Signup from '@/components/vtu/TestingTeleport/Signup.vue'

beforeEach(() => {
  // create teleport target
  const el = document.createElement('div')
  el.id = 'modal'
  document.body.appendChild(el)
})

afterEach(() => {
  // clean up
  document.body.outerHTML = ''
})

test('teleport', async () => {
  const wrapper = mount(Navbar)

  const signup = wrapper.getComponent(Signup)
  await signup.get('input').setValue('valid_username')
  await signup.get('form').trigger('submit.prevent')

  expect(signup.emitted().signup[0]).toEqual(['valid_username'])
})
