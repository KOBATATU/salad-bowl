// 1: style base
import { spinnerColors } from '@/components/Elements/Spinner/style/colors'

export const spinnerBase = {
  base: {
    animation: 'animate-spin',
    color: 'text-gray-300',
    width: 'w-6',
    height: 'h-6'
  },
  spinnerColor: {
    color: 'gray'
  }
} as const
// 2: Spinner type
export type SpinnerType = {
  className?: string
  spinnerColor?: keyof typeof spinnerColors
}