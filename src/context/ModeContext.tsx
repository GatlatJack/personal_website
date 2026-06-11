import { createContext, useContext, useState } from 'react'

type Mode = 'default' | 'minimal'

interface ModeContextValue {
  mode: Mode
  toggle: () => void
}

const ModeContext = createContext<ModeContextValue>({ mode: 'default', toggle: () => {} })

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('default')
  const toggle = () => setMode(m => m === 'default' ? 'minimal' : 'default')
  return <ModeContext.Provider value={{ mode, toggle }}>{children}</ModeContext.Provider>
}

export function useMode() {
  return useContext(ModeContext)
}
