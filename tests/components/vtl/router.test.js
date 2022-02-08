import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/components/vtl/Router/App.vue'
import Home from '@/components/vtl/Router/Home.vue'
import About from '@/components/vtl/Router/About.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},  
  {path: '/:catchAll(.*)', redirect: '/about'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


test('full app rendering/navigating', async () => {  
  router.push('/')
  await router.isReady()
  const { getByTestId, getByText } = render(App, {
    global: {
      plugins: [router]
    }
  })

  expect(getByTestId('location-display')).toHaveTextContent('/')

  await fireEvent.click(getByTestId('about-link')) 
  await flushPromises()
  
  expect(getByTestId('location-display')).toHaveTextContent('/about')
  getByText('You are on the about page')
  
  
})

test('setting initial route', async () => {
  // The callback function receives three parameters: the Vue instance where
  // the component is mounted, the store instance (if any) and the router
  // object.
  const {getByTestId} = render(App,  { global: { plugins: [router] } }, (router) => {
    router.push('/about')
  })
  
  await flushPromises()
  expect(router.getRoutes()).toHaveLength(3)
  expect(getByTestId('location-display')).toHaveTextContent('/about')
})


test('can render with an instantiated Vuex store', async () => {
  render(App, { global: { plugins: [router] } },  (router) => {      
    router.push('/about')
  })

    expect(router.getRoutes()).toHaveLength(3)
    expect(router.getRoutes()[0].path).toEqual('/')
})

/*test('can render with an instantiated Vuex store', async () => {
  // Instantiate a router with only one route
  const instantiatedRouter = new VueRouter({
    routes: [{path: '/special-path', component: Home}],
  })

  render(App, {routes: instantiatedRouter}, (vue, store, router) => {
    expect(router.getRoutes()).toHaveLength(1)
    expect(router.getRoutes()[0].path).toEqual('/special-path')
  })
})
*/
