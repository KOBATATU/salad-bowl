import React, { useState } from 'react'

type UseControllableStateParams<T> = {
  prop?: T | undefined;
  defaultProp?: T | undefined;
  onChange?: (state: T) => void;
};
export const useControllableState = <T,>({
  prop,
  defaultProp,
  onChange = () => {}
}: UseControllableStateParams<T>) => {
  const [ uncontrolledProp, setUncontrolledProp  ] = useState<T | undefined>(defaultProp)
  const isControlled = prop !== undefined
  const value = isControlled ? prop : uncontrolledProp

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> = React.useCallback(
    (nextValue)=>{
      if(isControlled) {
        if(nextValue !== prop) onChange(nextValue as T)
      } else {
        setUncontrolledProp(nextValue)
      }
    }, [ isControlled, prop, onChange ])

  return [ value, setValue ] as const
}