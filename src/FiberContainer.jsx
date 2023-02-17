import { Canvas } from "@react-three/fiber";
import { CameraControls, Sky } from "@react-three/drei";
import { Scene } from "./Scene";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";
import { React, forwardRef } from "react";

function Loading() {
    return (
        <div className="Loader">
            <BeatLoader color="#ffffff" />
        </div>
    );
}

export const FiberContainer = forwardRef((props, ref) => {
    return (
        <Suspense fallback={<Loading />}>
            <Canvas dpr={3} camera={{ position: [7500, 15000, 7500], fov: 50, near: 10, far: 10000000 }}>
                <Scene model={props.path} />
                {/* <Sky distance={450000} sunPosition={[0, 1000, 0]} inclination={0} azimuth={0.25} /> */}
                <CameraControls />
            </Canvas>
        </Suspense>
    );
});
