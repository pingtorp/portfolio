import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
  const meshRef = useRef();
  
  // Create a nice gradient material
  const material = new THREE.MeshPhongMaterial({
    color: '#7c6ff7',
    emissive: '#5dd9b8',
    emissiveIntensity: 0.2,
    shininess: 100,
    wireframe: true,
  });

  useFrame((state) => {
    if (meshRef.current) {
      // Parallax effect based on mouse
      const x = (state.mouse.x * 0.5);
      const y = (state.mouse.y * 0.5);
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.1);
    }
  });

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      
      <Float
        speed={2} // Animation speed
        rotationIntensity={1} // XYZ rotation intensity
        floatIntensity={2} // Up/down float intensity
      >
        <mesh ref={meshRef} material={material}>
          <torusKnotGeometry args={[1.5, 0.4, 256, 32]} />
        </mesh>
      </Float>
    </>
  );
};

export default FloatingShape;
