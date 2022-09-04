import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ScrollControls, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

// https://stackoverflow.com/questions/70300337/load-gltf-model-in-next-js-error-could-not-load-url-response-body-getreader
const Model = () => {
  const model = useGLTF('/models/blue.glb');
  //   const model = useGLTF('/models/blue2.glb');

  const modelRef = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    // if (modelRef.current) modelRef.current.rotation.z += 0.01;
  });
  return (
    <ScrollControls>
      <mesh ref={modelRef}>
        <primitive object={model.scene}></primitive>
      </mesh>
    </ScrollControls>
  );
};

export default Model;
