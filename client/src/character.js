import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import * as THREE from 'three'
import Control from './control.js'

const Character = (props) => {
  const { camera } = useThree()
  const { forward, backward, left, right } = Control()
  const direction = new THREE.Vector3()

  const [ref, api] = useSphere(() => ({
    mass: 1,
    ...props,
  }))

  useFrame(() => {
    ref.current.getWorldPosition(camera.position)
    direction.set(
      Number(forward) - Number(backward),
      0,
      Number(left) - Number(right)
    )
    direction.normalize().applyEuler(camera.position)
    api.velocity.set(direction.x, 0, direction.y)
  })

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <sphereGeometry args={props.args} />
      <meshStandardMaterial color="#ff0000" />
    </mesh>
  )
}

export default Character
