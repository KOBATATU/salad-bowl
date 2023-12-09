import { cardVariants } from '@/components/Elements/Card/variants'

export const styles = {
  card: {
    base: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'flex-col',
      backgroundClip: 'bg-clip-border',
      borderRadius: 'rounded-xl',
      color: 'bg-white'
    },
    variants: {
      variants: cardVariants
    }
  },
  header: {
    base: {
      position: 'relative',
      backgroundClip: 'bg-clip-border',
      mt: 'mt-4',
      mx: 'mx-4',
      overflow: 'overflow-hidden'
    }
  },
  body: {
    base : {
      p: 'p-6'
    }
  },
  footer: {
    base: {
      p: 'px-6',
      px: 'pb-6'
    },
    variants: {
      divider: {
        true: 'border-t border-blue-gray-50'
      }
    }
  }
} as const