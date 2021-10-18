export default function({ route, store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    redirect({
      path: '/',
      query: {redirect: route.path}
    })
  }
}
