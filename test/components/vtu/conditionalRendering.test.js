import { mount } from '@vue/test-utils'

const Nav = {
  template: `
    <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
      <ul v-show="shouldShowDropdown" id="user-dropdown">
        <!-- dropdown content -->
      </ul>
    </nav>
  `,
  data() {
    return {
      admin: false,
      shouldShowDropdown: false
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

test('does not render an admin link', () => {
  const wrapper = mount(Nav)

  // Using `wrapper.get` would throw and make the test fail.
  expect(wrapper.find('#admin').exists()).toBe(false)
})

test('renders an admin link', () => {
  const wrapper = mount(Nav, {
    data() {
      return {
        admin: true
      }
    }
  })

  expect(wrapper.find('#admin').exists()).toBe(true)
  // Again, by using `get()` we are implicitly asserting that
  // the element exists.
  
  expect(wrapper.get('#admin').text()).toEqual('Admin')
})

test('does not show the user dropdown', () => {
  const wrapper = mount(Nav)

  expect(wrapper.get('#user-dropdown').isVisible()).toBe(false)
})

test('does show the user dropdown', () => {
  const wrapper = mount(Nav,{
    data() {
      return {
        shouldShowDropdown: true
      }
    }
  })

  expect(wrapper.get('#user-dropdown').isVisible()).toBe(true)
})



