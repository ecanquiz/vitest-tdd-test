import { mount } from '@vue/test-utils'
import Password from '@/components/vtu/PassingDataToComponents/Password.vue'

test('renders an error if length is too short', () => {
  const wrapper = mount(Password, {
    props: {
      minLength: 6      
    },
    data() {
      return {
        password: 'short'
      }
    }
  })

  expect(wrapper.html()).toContain('Password must be at least 6 characters')
})

test('renders an error if length is too long', () => {
  const wrapper = mount(Password, {
    props: {
      maxLength: 10
    },
    data() {
      return {
        password: 'extremely-too-long'
      }
    }
  })

  expect(wrapper.html()).toContain('Password should not exceed 10 characters')
})
