import { DOMWrapper, createWrapperError } from '@vue/test-utils'

/*class DOMWrapper {
  constructor(element) {
    this.element = element
  }

  trigger(evtString) {
    const evt = document.createEvent('Event')
    evt.initEvent(evtString)
    this.element.dispatchEvent(evt)
  }
}*/

export default function DataTestIdPlugin(wrapper) {
  function findByTestId(selector) {
    const dataSelector = `[data-testid='${selector}']`
    const element = wrapper.element.querySelector(dataSelector)

    if (element) {
      return new DOMWrapper(element)
    }

    return createWrapperError('DOMWrapper')
  }

  return {
    findByTestId
  }
}
