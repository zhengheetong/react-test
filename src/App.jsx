import { useState } from 'react'
import './App.css'

function App() {
  const [power, setPower] = useState(false)

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#14b8a6', height: '100vh', padding: '50px', fontFamily: 'monospace' }}>
      <h1>SYSTEM: {power ? 'ONLINE' : 'OFFLINE'}</h1>
      
      <p>Welcome to your first React Interface.</p>
      
      <button 
        onClick={() => setPower(!power)}
        style={{ padding: '10px 20px', background: 'transparent', border: '1px solid #14b8a6', color: '#14b8a6', cursor: 'pointer' }}
      >
        TOGGLE POWER
      </button>
    </div>
  )
}

export default App