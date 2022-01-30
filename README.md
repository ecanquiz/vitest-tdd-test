# Vue 3 + Vite + Vitets + Vtu + Vtl

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# vitest-tdd-test
vitest-tdd-test

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

## Vue Test Utils

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
