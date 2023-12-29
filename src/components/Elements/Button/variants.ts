export const variants = {
  contained: {
    primary: {
      // color: 'text-white bg-blue-500',
      // shadow: 'shadow-md',
      hover: 'hover:shadow-lg',
      active: 'active:opacity-[0.85] active:shadow-none',
    },
    secondary: {
      color: 'bg-green-500 text-white',
      shadow: 'shadow-md',
      hover: 'hover:shadow-lg',
      active: 'active:opacity-[0.85] active:shadow-none',
    },
    white: {
      color: 'text-blue-gray-900 bg-white',
      shadow: 'shadow-md ',
      hover: 'hover:shadow-lg ',
      active: 'active:opacity-[0.85] active:shadow-none'
    },
  },
  text: {
    primary: {
      color: 'text-blue-500',
      hover: 'hover:bg-blue-500/10',
      active: 'active:bg-blue-500/30',
    },
    secondary: {
      color: 'text-green-500',
      hover: 'hover:bg-green-500/10',
      active: 'active:bg-green-500/30',
    },
    white: {
      color: 'text-white',
      hover: 'hover:bg-white/10',
      active: 'active:bg-white/30',
    }
  },
  outlined: {
    primary: {
      border: 'border border-blue-500',
      color: 'text-blue-500',
      hover: 'hover:opacity-75',
      active: 'active:opacity-[0.85]',
    },
    secondary: {
      border: 'border border-green-500',
      color: 'text-green-500',
      hover: 'hover:opacity-75',
      active: 'active:opacity-[0.85]',
    },
    white: {
      border: 'border border-white',
      color: 'text-white',
      hover: 'hover:opacity-75',
      active: 'active:opacity-[0.85]',
    }
  }
} as const