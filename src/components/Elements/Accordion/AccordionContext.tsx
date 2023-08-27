import { createContext, ReactNode, useContext } from 'react'

type AccordionContextType = {
  open: boolean
}

const AccordionContext = createContext<AccordionContextType | null>(null)

export const useAccordion = ()=>{
  const context = useContext(AccordionContext)

  if(!context) {
    throw new Error('"useAccordion()"はAccordionコンポーネント内部で利用してください.')
  }

  return context
}

type AccordionContextProviderProps = {
  value: AccordionContextType
  children: ReactNode
}

export const AccordionContextProvider = ({ value, children }: AccordionContextProviderProps) => {
  return <AccordionContext.Provider value={value}>
    {children}
  </AccordionContext.Provider>
}