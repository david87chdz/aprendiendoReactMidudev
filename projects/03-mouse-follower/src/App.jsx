// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect, useState } from 'react';
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  //Pointer move
  useEffect(() => {
    console.log('Efecto', {enabled});
    const handleMove = (event) => {
      const {clientX, clientY} = event;
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY});
    }
    if(enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    
    //clean up
    // cuando se desmonte el componente
    // cuando cambian las dependencias antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove);
      setPosition({x: 0, y: 0});
    }
  }, [enabled])

  //Change body className
  useEffect(() => {
      document.body.classList.toggle('no-cursor', enabled);
   return () => {
      document.body.classList.remove('no-cursor');
   }
  }, [enabled])

  return (
    <main>
        <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      />
    <button onClick={()=> setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </main>
  )
}

function App() {
  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
