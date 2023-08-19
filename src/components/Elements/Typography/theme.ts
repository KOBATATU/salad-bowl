import { ReactNode} from "react";
import {variants} from "@/components/Elements/Typography/variants";
import typographyColors from "@/components/Elements/Typography/colors";

// 1: Typography Type
export type TypographyType = {
    variant: keyof typeof variants
    color: keyof typeof typographyColors
    as?:  keyof typeof variants
    children?: ReactNode
    className: string
}

// 1: Typography Default Props
export const TypographyDefaultProps: TypographyType = {
  variant: 'paragraph',
  color: 'black',
  className: ''
}