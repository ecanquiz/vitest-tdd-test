# Vue 3 + Vite + Vitets + Vtu + Vtl

<img src="https://vitejs.dev/logo.svg" width="100" height="100"/><img src="https://vitest.dev/logo.svg" width="100" height="100"/><img src="https://vuejs.org/images/logo.svg" width="100" height="100"/><img src="https://testing-library.com/img/logo-large.png" width="100" height="100"/>

# Vitest-Tdd-Test

npm init vite@latest

npm install -D vitest

npm install -D @vue/test-utils@next

npm install -D @testing-library/vue@next

```
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
```

# Tips

When you're writing tests, you often need to check that values meet certain conditions

## Wrapping [Jest](https://jestjs.io/)

- `[expect](https://jestjs.io/docs/expect)` gives you access to a number of "matchers" that let you validate different things

- The tests will complete as soon as be completes, before ever calling the callbacks. There is an alternate form of `test` that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called `done`. This will wait until the `done` callback is called before finishing the test.
- Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run.
- If you have some work you need to do repeatedly for many tests, you can use `beforeEach` and `afterEach`.
- In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Use `beforeAll` and `afterAll` to handle this situation.
- By default, the `beforeAll` and `afterAll` blocks apply to every test in a file. You can also group tests together using a `describe` block. When they are inside a describe block, the `beforeAll` and `afterAll` blocks only apply to the tests within that describe block.
- If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. To run only one test, temporarily change that `test` command to a `test.only`.
- In the case where we do need to create a fake (or mocked) version of a function we can use [vi.fn()](https://vitest.dev/api/#vi-fn). We use [Tinyspy](https://github.com/Aslemammad/tinyspy) as a base for mocking functions, but we have our own wrapper to make it [object jest](https://jestjs.io/docs/jest-object) compatible. Both `vi.fn()` and `vi.spyOn()` share the same methods, however only the return result of `vi.fn()` is callable.

## [Vue Test Utils](https://vue-test-utils.vuejs.org/)

**A Crash Course**

- Use `mount()` to render a component.
- Use `get()` and `findAll()` to query the DOM.
- `trigger()` and `setValue()` are helpers to simulate user input.
- Updating the DOM is an async operation, so make sure to use `async` and `await`.
- Testing usually consists of 3 phases; arrange, act and assert.

**Conditional Rendering**

- Use `find()` along with `exists()` to verify whether an element is in the DOM.
- Use `get()` if you expect the element to be in the DOM.
- The `data` mounting option can be used to set default values on a component.
- Use `get()` with `isVisible()` to verify the visibility of an element that is in the DOM

**Event Handling**

- Use `emitted()` to access the events emitted from a Vue component.
- `emitted(eventName)` returns an array, where each element represents one event emitted.
- Arguments are stored in `emitted(eventName)[index]` in an array in the same order they are emitted.

**Form Handling**
- Use `setValue` to set the value on both DOM inputs and Vue components.
- Use `trigger` to trigger DOM events, both with and without modifiers.
- Add extra event data to `trigger` using the second parameter.
- Assert that the DOM changed and the right events got emitted. Try not to assert data on the Component instance.

## [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/)
