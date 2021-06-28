export default function ({store, redirect}) {
  if (!store.state.auth.autenticado) {
    return redirect("/login")
  }
}
