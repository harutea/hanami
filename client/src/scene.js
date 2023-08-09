import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointerLockControls, Sky } from '@react-three/drei'
import Character from './character.js'
import Floor from './floor.js'
import { Physics } from '@react-three/cannon'

const Box = () => {
  const meshRef = useRef()
  useFrame((state, delta, xrFrame) => {
    meshRef.current.rotation.y += delta
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

const HanamiScene = () => {
  return (
    <div id="canvas-container">
      <Canvas shadows camera={{ fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />

        <Physics gravity={[0, -9.8, 0]}>
          <Character controls args={[0.5]} position={[0, 2, 0]} color="blue" />
          <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
        </Physics>

        <Sky />

        <PointerLockControls />
      </Canvas>
    </div>
  )
}

export default HanamiScene
