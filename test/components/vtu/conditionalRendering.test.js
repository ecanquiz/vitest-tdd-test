import { mount } from '@vue/test-utils'

const Nav = {
  template: `
    <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
    </nav>
  `,
  data() {
    return {
      admin: false
    }
  }
}

test('renders a profile link', () => {
  const wrapper = mount(Nav)

  // Here we are implicitly asserting that the
  // element #profile exists.
  const profileLink = wrapper.get('#profile')

  expect(profileLink.text()).toEqual('My Profile')
})
