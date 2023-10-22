export function logger(state: any) {
  return function wrapDispatch(next: (arg0: any) => any) {
    return function handleAction(action: any) {
      return next(action)
    }
  }
}
