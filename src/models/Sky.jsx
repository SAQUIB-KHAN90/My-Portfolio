import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import SkyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const sky = useGLTF(SkyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
