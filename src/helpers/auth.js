export const authorize = auth => {
  const isAuthenticated = !!auth.token && !!auth.user.id;

  return [auth.user, isAuthenticated]
}
