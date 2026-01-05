'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, Center, Bounds } from '@react-three/drei'
import { Suspense } from 'react'


function Model() {
  const { scene } = useGLTF('/models/robot.glb')
  return (
    <Center>
      <primitive object={scene} scale={0.6} />
    </Center>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-full h-[60vh] md:h-[80vh]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [3, 2, -3], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
        <Bounds fit clip  margin={1}>
          <Model />
        </Bounds>
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={6}
          maxDistance={10}
        />
      </Canvas>
    </div>
  )
}
