import {render, fireEvent} from '@testing-library/vue'
import Component from '@/components/vtl/Examples/Component2.vue'

test('properly handles v-model', async () => {
  const {getByLabelText, getByText} = render(Component)

  // Asserts initial state.
  getByText('Hi, my name is Alice')

  // Get the input DOM node by querying the associated label.
  const usernameInput = getByLabelText(/username/i)

  // Updates the <input> value and triggers an `input` event.
  // fireEvent.input() would make the test fail.
  await fireEvent.update(usernameInput, 'Bob')

  getByText('Hi, my name is Bob')
})
