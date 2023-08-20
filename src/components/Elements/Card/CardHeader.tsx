import {CardHeaderDefaultStyle, CardHeaderType} from "@/components/Elements/Card/style/theme";
import {ComponentProps, forwardRef} from "react";
import {tailwindMerge} from "@/lib/tailwindMerge";
import {objectsToString} from "@/lib/objectsToString";

type CardHeaderProps = Partial<CardHeaderType> & ComponentProps<'div'>

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      className,
      children,
      ...rest
    },
    ref
  ) => {

    // 1: set styles
    const cardHeaderBase = objectsToString(CardHeaderDefaultStyle.base)
    const classNames = tailwindMerge(cardHeaderBase, className)

    return <div {...rest} ref={ref} className={classNames}>
      { children }
    </div>
  }
)

CardHeader.displayName = 'CardHeader'