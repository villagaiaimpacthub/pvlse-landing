'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface CraftUIItem {
  title: string
  description: string
  subtitle?: string
}

interface CraftUIContextType {
  activeItem: CraftUIItem | null
  setActiveItem: (item: CraftUIItem | null) => void
}

const CraftUIContext = createContext<CraftUIContextType | undefined>(undefined)

export function CraftUIProvider({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState<CraftUIItem | null>({
    title: "Follow-ups already done",
    description: "End the call. The notes are written, the tasks assigned, responsibilities crystal clear.",
    subtitle: "Meeting ends, tasks appear"
  })

  return (
    <CraftUIContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </CraftUIContext.Provider>
  )
}

export function useCraftUI() {
  const context = useContext(CraftUIContext)
  if (context === undefined) {
    throw new Error('useCraftUI must be used within a CraftUIProvider')
  }
  return context
}