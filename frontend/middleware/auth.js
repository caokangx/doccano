export default function({ route, store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    // console.log(route.path)
    redirect({
      path: '/',
      query: {redirect: route.path}
    })
  }
}
