import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber'

const Box = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}>
            <icosahedronGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={active ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function Cube2() {
    
    return (
        <>
        <h3 className="App">Click us</h3>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
        </>
    )
}
