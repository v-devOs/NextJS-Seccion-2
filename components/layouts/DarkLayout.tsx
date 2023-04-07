import { FC, ReactNode } from "react"

interface props{
  children: ReactNode
}

export const DarkLayout: FC<props> =  ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#252525',
      borderRadius: '5px',
      padding: '10px',
      fontFamily: 'sans-serif'
    }}>
      <h2>Dark-layout</h2>
      {children}
    </div>
  )
}
