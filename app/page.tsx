'use client'

import { useState } from 'react'

export default function Home() {
  const [clickCount, setClickCount] = useState(0)
  const [toggleState, setToggleState] = useState(false)

  const handlePrimaryClick = () => {
    setClickCount(prev => prev + 1)
  }

  const handleToggleClick = () => {
    setToggleState(prev => !prev)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Button Testing App</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Primary Button</h2>
        <button 
          onClick={handlePrimaryClick}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          data-testid="primary-button"
        >
          Click Me
        </button>
        <p data-testid="click-count">Clicked: {clickCount} times</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Toggle Button</h2>
        <button 
          onClick={handleToggleClick}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: toggleState ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          data-testid="toggle-button"
        >
          {toggleState ? 'ON' : 'OFF'}
        </button>
        <p data-testid="toggle-state">State: {toggleState ? 'ON' : 'OFF'}</p>
      </div>

      <div>
        <h2>Reset Button</h2>
        <button 
          onClick={() => {
            setClickCount(0)
            setToggleState(false)
          }}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          data-testid="reset-button"
        >
          Reset All
        </button>
      </div>
    </div>
  )
}