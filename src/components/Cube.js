import React from 'react';
import * as THREE from 'three/build/three.module';

export default function Cube() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight);

    let renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.append(renderer.domElement);

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial( { color: 'red' } );
    let cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    cube.position.z = -5;
    const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
        requestAnimationFrame( animate );
    }

    animate();
    return (
        <div id="cube">
        </div>
    )
}
