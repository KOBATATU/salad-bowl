import { useLayoutEffect } from '@radix-ui/react-use-layout-effect'
import * as React from 'react'

let count = 0

/**
 * deterministicIdがあればそのidを返す.なければ、countプラスしてユニークなidを自動生成する
 * @param deterministicId
 */
function useId(deterministicId?: string): string {
  const [id, setId] = React.useState<string | undefined>(undefined)
  // React versions older than 18 will have client-side ids only.
  useLayoutEffect(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++))
  }, [deterministicId])
  return deterministicId || (id ? `salad-${id}` : '')
}

export { useId }