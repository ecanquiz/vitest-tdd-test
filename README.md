# Vite + Vitets + Vtu + Vtl

<img src="https://vitejs.dev/logo.svg" width="100" height="100"/><img src="https://vitest.dev/logo.svg" width="100" height="100"/><img src="https://vuejs.org/images/logo.svg" width="100" height="100"/><img src="https://testing-library.com/img/logo-large.png" width="100" height="100"/>

# How to do TDD with Vue 3

Test Driven Development (TDD), is a software engineering technique, which directs the development of a product through writing tests, generally unit tests.

TDD was developed by Kent Beck in the late 1990s and is part of the XP (extreme programming) methodology. Its author and the followers of the TDD assure that with this technique a code that is more tolerant to change, robust, secure, cheaper to maintain and, even, once you get used to applying it, promises greater speed when developing.

**The three laws of TDD**

1. You will not write production code without first writing a test that fails.
2. You will not write more than one unit test enough to fail (and not compiling is failing).
3. You will not write more code than necessary to pass the test.

These three laws lead to the repetition of what is known as the Red-Green-Refactor cycle. Let's see what it consists of:

**The Red-Green-Refactor cycle**

The Red-Green-Refactor cycle, also known as the TDD algorithm, is based on:

1. Red: Write a test that fails, that is, we have to perform the test before writing the implementation. Normally unit tests are used, although in some contexts it may make sense to do TDD with integration tests.
2. Green: Once the test that fails is created, we will implement the minimum code necessary for the test to pass.
3. Refactor: Finally, after getting our code to pass the test, we need to examine it to see if there are any improvements we can make.
- Once we have closed the loop, we start again with the next requirement.

This way of programming offers two main benefits. The first and most obvious is that we get code with good test coverage, which is positive up to a point. Remember, we get paid to write code that works, not to test.

The second benefit is that writing the tests first helps us design the API that our component is going to have, as it forces us to think about how we want to use it. This often ends up leading to components with well-defined responsibilities and low coupling.

**TDD limitations**

No matter how many inherent benefits it has (or are promised), the TDD technique should not be understood as a religion or a magic formula that works for everything. Following TDD to the letter and in all contexts does not guarantee that your code will be more tolerant to change, robust or secure, nor does it even guarantee that you will be more productive when designing software.

According to the point of view of some experts, applying TDD does not fit well in all contexts. For example, if there is an obvious implementation for a use case, I write it directly and then do the tests. In the case of working on the frontend, I don't consider doing TDD to design UI components either. It is even debatable whether unit tests should be done to test UI elements. Large developers have repeatedly commented that it is not convenient to do automated tests on these, since it is very changeable and the tests are outdated too often.

The advice is that you try, try to apply it in your day to day for a while and then decide for yourself.

# Proyect and the test enviroment

To prepare your proyect and the test enviroment, execute folowing in command line:
```
npm init vite@latest
npm install -D vitest
npm install -D @vue/test-utils@next
npm install -D @testing-library/vue@next
```

Then update the `vite.config.js` file with the following:
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

- [`expect`](https://jestjs.io/docs/expect) gives you access to a number of "matchers" that let you validate different things

- The tests will complete as soon as be completes, before ever calling the callbacks. There is an alternate form of [`test`](https://jestjs.io/docs/api#testname-fn-timeout) that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called `done`. This will wait until the `done` callback is called before finishing the test.
- Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run.
- If you have some work you need to do repeatedly for many tests, you can use [`beforeEach`](https://jestjs.io/docs/api#beforeeachfn-timeout) and [`afterEach`](https://jestjs.io/docs/api#aftereachfn-timeout).
- In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Use [`beforeAll`](https://jestjs.io/docs/api#beforeallfn-timeout) and [`afterAll`](https://jestjs.io/docs/api#afterallfn-timeout) to handle this situation.
- By default, the `beforeAll` and `afterAll` blocks apply to every test in a file. You can also group tests together using a [`describe`](https://jestjs.io/docs/api#describename-fn) block. When they are inside a describe block, the `beforeAll` and `afterAll` blocks only apply to the tests within that describe block.
- If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. To run only one test, temporarily change that `test` command to a [`test.only`](https://jestjs.io/docs/api#testonlyname-fn-timeout).
- In the case where we do need to create a fake (or mocked) version of a function we can use [vi.fn()](https://vitest.dev/api/#vi-fn). We use [Tinyspy](https://github.com/Aslemammad/tinyspy) as a base for mocking functions, but we have our own wrapper to make it [object jest](https://jestjs.io/docs/jest-object) compatible. Both [`vi.fn()`](https://vitest.dev/api/#vi-fn) and [`vi.spyOn()`](https://vitest.dev/api/#vi-spyon) share the same methods, however only the return result of `vi.fn()` is callable.

## [Vue Test Utils](https://vue-test-utils.vuejs.org/)

**[A Crash Course](https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html)**

The test is split into three distinct stages, separated by new lines. The three stages represent the three phases of a test: **arrange**, **act** and **assert**.

In the arrange phase, we are setting up the scenario for the test. A more complex example may require creating a Vuex store, or populating a database.

In the act phase, we act out the scenario, simulating how a user would interact with the component or application.

In the assert phase, we make assertions about how we expect the current state of the component to be.

Almost all test will follow these three phases. You don't need to separate them with new lines like this guide does, but it is good to keep these three phases in mind as you write your tests.

- Use [`mount()`](https://next.vue-test-utils.vuejs.org/api/#mount) to render a component.
- Use [`get()`](https://next.vue-test-utils.vuejs.org/api/#get) and [`findAll()`](https://next.vue-test-utils.vuejs.org/api/#findall) to query the DOM.
- [`trigger()`](https://next.vue-test-utils.vuejs.org/api/#trigger) and [`setValue()`](https://next.vue-test-utils.vuejs.org/api/#setvalue) are helpers to simulate user input.
- Updating the DOM is an async operation, so make sure to use `async` and `await`.
- Testing usually consists of 3 phases; arrange, act and assert.

**[Conditional Rendering](https://next.vue-test-utils.vuejs.org/guide/essentials/conditional-rendering.html)**

- Use `find()` along with `exists()` to verify whether an element is in the DOM.
- Use `get()` if you expect the element to be in the DOM.
- The `data` mounting option can be used to set default values on a component.
- Use `get()` with `isVisible()` to verify the visibility of an element that is in the DOM

**[Event Handling](https://next.vue-test-utils.vuejs.org/guide/essentials/event-handling.html)**

- Use `emitted()` to access the events emitted from a Vue component.
- `emitted(eventName)` returns an array, where each element represents one event emitted.
- Arguments are stored in `emitted(eventName)[index]` in an array in the same order they are emitted.

**[Form Handling](https://next.vue-test-utils.vuejs.org/guide/essentials/forms.html)**

- Use `setValue` to set the value on both DOM inputs and Vue components.
- Use `trigger` to trigger DOM events, both with and without modifiers.
- Add extra event data to `trigger` using the second parameter.
- Assert that the DOM changed and the right events got emitted. Try not to assert data on the Component instance.

**[Passing Data to Components](https://next.vue-test-utils.vuejs.org/guide/essentials/passing-data.html)**

- Use the `props` and `data` mounting options to pre-set the state of a component.
- Use `setProps()` to update a prop during a test.
- Use the `await` keyword before `setProps()` to ensure the Vue will update the DOM before the test continues.
- Directly interacting with your component can give you greater coverage. Consider using `setValue` or `trigger` in combination with data to ensure everything works correctly.

**[Write components that are easy to test](https://next.vue-test-utils.vuejs.org/guide/essentials/easy-to-test.html)**

Following is a list of suggestions to write code that is easier to test, and to write tests that are meaningful and simple to maintain.

The following list provide general guidance and it might come in handy in common scenarios.

Do not test implementation details. Think in terms of inputs and outputs from a user perspective. Roughly, this is everything you should take into account when writing a test for a Vue component:

```
|--------------|---------------------------------------------------|
| Inputs       | Examples                                          |
|--------------|---------------------------------------------------|
| Interactions | Clicking, typing... any "human" interaction       |
| Props	       | The arguments a component receives                |
| Data streams | Data incoming from API calls, data subscriptions… |
|--------------|---------------------------------------------------|	
```
```
|--------------|---------------------------------------------------|
| Outputs      | Examples                                          |
|--------------|---------------------------------------------------|
| DOM elements | Any observable node rendered to the document      |
| Events       | Emitted events (using $emit)                      |
| Side Effects | Such as console.log or API calls                  |
|--------------|---------------------------------------------------|	
```
The rule of thumb is that a test should not break on a refactor, that is, when we change its internal implementation without changing its behavior. If that happens, the test might rely on implementation details.

Libraries such as [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/) are build upon these principles. If you are interested in this approach, make sure you check it out.

Build smaller, simpler components. A general rule of thumb is that if a component does less, then it will be easier to test.

Making smaller components will make them more composable and easier to understand.

Sometimes a component might feature a complex method, perform heavy calculations, or use several dependencies.

The suggestion here is to extract this method and import it to the component. This way, you can test the method in isolation using [Jest](https://jestjs.io/) commands with [Vitest](https://vitest.dev/).

This has the additional benefit of ending up with a component that's easier to understand because complex logic is encapsulated in another file.

Also, if the complex method is hard to set up or slow, you might want to mock it to make the test simpler and faster. Examples on making HTTP requests is a good example – [Axios](https://axios-http.com/) is quite a complex library!
Write tests before writing the component

You can't write untestable code if you write tests beforehand!

**[Slots](https://next.vue-test-utils.vuejs.org/guide/advanced/slots.html)**

- Use the `slots` mounting option to test components using `<slot>` are rendering content correctly.
- Content can either be a string, a render function or an imported SFC.
- Use `default` for the default slot, and the correct name for a named slots.
- scoped slots and the `#` shorthand is also supported.

**[Asynchronous Behavior](https://next.vue-test-utils.vuejs.org/guide/advanced/async-suspense.html)**

- Vue updates the DOM asynchronously; tests runner executes code synchronously instead.
- Use `await nextTick()` to ensure the DOM has updated before the test continues.
- Functions that might update the DOM (like `trigger` and `setValue`) return `nextTick`, so you need to `await` them.
- Use `flushPromises` from Vue Test Utils to resolve any unresolved promises from non-Vue dependencies (such as API requests).
- Use `Suspense` to test components with an asynchronous `setup`.

## [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/)
