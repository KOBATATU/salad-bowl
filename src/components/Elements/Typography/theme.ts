import { variants } from '@/components/Elements/Typography/variants'
import colors from "@/components/Elements/Typography/colors";

export const styles = {
  base: {
    fontSmoothing: 'antialiased'
  },
  variants: {
    variants: variants,
    colors: colors
  }
} as const
