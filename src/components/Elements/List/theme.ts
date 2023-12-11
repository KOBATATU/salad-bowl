// 1: style base
export const styles = {
  list: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      p: 'p-2',
      fontSize: 'text-base',
      fontWeight: 'font-normal',
      gap: 'gap-1',
      color: 'text-blue-gray-700',
    }
  },
  listItem: {
    base: {
      display: 'flex',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'p-3',
      borderRadius: 'rounded-lg',
      textAlign: 'text-start',
      lightHeight: 'leading-tight',
      bg: 'hover:bg-gray-100 hover:bg-opacity-80 active:bg-gray-200 active:bg-opacity-80 hover:cursor-pointer',
      outline: 'outline-none',
    },
    variants: {
      disabled: {
        true: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
      }
    }
  }
} as const
