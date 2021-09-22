export default async function({ store }) {
  if (!store.getters['auth/isAuthenticated'] || !store.getters['auth/getUsername']) {
    // console.log(route.path)
    await store.dispatch('auth/initAuth')
  }
}
