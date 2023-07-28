import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import * as THREE from 'three'
import Control from './control'

const Character = (props) => {
  const { forward, backward, left, right } = Control()
  const direction = new THREE.Vector3()

  useFrame(() => {
    direction.set(
      Number(forward) - Number(backward),
      0,
      Number(left) - Number(right)
    )
  })

  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Character
