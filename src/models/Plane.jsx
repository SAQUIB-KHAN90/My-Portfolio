import React from "react";
import PlaneScene from "../assets/3d/plane.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
