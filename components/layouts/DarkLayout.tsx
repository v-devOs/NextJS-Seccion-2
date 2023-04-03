

export const DarkLayout = ({ children } : {children: React.ReactNode}) => {
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
