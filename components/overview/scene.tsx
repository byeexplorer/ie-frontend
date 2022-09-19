import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { lazy, useRef } from 'react';

const LazyModel = lazy(() => import('components/overview/model'));

const Scene = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight color="skyblue" position={[0, 0, 5]} intensity={5} />

        <LazyModel />
        <mesh>
          <meshStandardMaterial />
        </mesh>
        {/* <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="red" />
        </mesh> */}
      </Canvas>
    </>
  );
};

export default Scene;
