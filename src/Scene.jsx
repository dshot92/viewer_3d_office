import { React, forwardRef } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

// export function Scene() {
export const Scene = forwardRef((props, ref) => {
    return (
        <>
            <ambientLight intensity={1} />
            <primitive object={useLoader(FBXLoader, props.model)} position={[0, 0, 0]} />
        </>
    );
});
