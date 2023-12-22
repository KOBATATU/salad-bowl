// 1: style base
import { spinnerColors } from '@/components/Elements/Spinner/colors'

export const styles = {
  base: {
    animation: 'animate-spin',
    color: 'text-gray-300',
    width: 'w-6',
    height: 'h-6'
  },
  variants: {
    colors: spinnerColors
  }
} as const