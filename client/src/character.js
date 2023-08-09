import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import * as THREE from 'three'
import Control from './control.js'

const Character = (props) => {
  const { camera } = useThree()
  const direction = new THREE.Vector3()

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 10, 0],
    ...props,
  }))

  const { forward, backward, left, right } = Control()
  const velocity = useRef([0, 0, 0])

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v))
  }, [])

  useFrame((state) => {
    ref.current.getWorldPosition(camera.position)
    direction.set(
      Number(right) - Number(left),
      0,
      Number(backward) - Number(forward)
    )
    direction.normalize().multiplyScalar(3).applyEuler(camera.rotation)
    api.velocity.set(direction.x, 0, direction.z)
  })

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <sphereGeometry args={props.args} />
      <meshStandardMaterial color="#ff0000" />
    </mesh>
  )
}

export default Character
