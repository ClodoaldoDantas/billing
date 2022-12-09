import { createContext, ReactNode, useContext, useState } from 'react'

interface DrawerContextData {
  isOpen: boolean
  toggleDrawer: () => void
}

interface DrawerProviderProps {
  children: ReactNode
}

const DrawerContext = createContext({} as DrawerContextData)

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => useContext(DrawerContext)
