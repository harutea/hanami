import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = () => {
  const meshRef = useRef()
  useFrame((state, delta, xrFrame) => {
    meshRef.current.rotation.y += delta
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial />
    </mesh>
  )
}

const HanamiScene = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Box />
      </Canvas>
    </div>
  )
}

export default HanamiScene
