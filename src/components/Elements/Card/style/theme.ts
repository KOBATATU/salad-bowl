
// 1: style base
import {cardVariants} from "@/components/Elements/Card/style/variants";

export const base = {
  position: "relative",
  display: "flex",
  flexDirection: "flex-col",
  backgroundClip: "bg-clip-border",
  borderRadius: "rounded-xl",
}

// 2: Card Type
export type CardType = {
    variant: keyof typeof cardVariants
    base: typeof base
    className?: string
}

// 3: Card Default Style
export const CardDefaultStyle: CardType = {
  variant: "contained",
  base: base
}