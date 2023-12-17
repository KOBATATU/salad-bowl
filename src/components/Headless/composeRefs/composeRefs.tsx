import * as React from 'react'

type PossibleRef<T> = React.Ref<T> | undefined

const setRef = <T,>(ref: PossibleRef<T>, node: T) => {
  if (typeof ref === 'function') {
    ref(node)
  } else if (ref !== null && ref !== undefined) {

    (ref as React.MutableRefObject<T>).current = node
  }
}
export const useComposedRefs = <T,>(...refs: PossibleRef<T>[]) => {
  return React.useCallback((node: T) => refs.forEach((ref) => setRef(ref, node)), refs)
}