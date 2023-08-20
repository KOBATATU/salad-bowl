// 1: style base

import { ReactNode } from 'react'
import { variants } from '@/components/Notifications/Alert/style/variants'

export const base = {
  position: 'relative',
  display: 'flex',
  width: 'w-full',
  fontSize: 'text-base',
  fontWeight: 'font-regular',
  p: 'p-4',
  borderRadius: 'rounded-lg',
}

// 2: Alert Type
export type AlertType = {
  variant: keyof typeof variants
  color: keyof typeof variants['contained']
  open: boolean
  prefetchIcon?: ReactNode
  className?: string
}

// 3: Alert Default Style
export const AlertDefaultStyle: AlertType = {
  variant: 'contained',
  color: 'success',
  open: true,
}