// components/ThreeScene.js
"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentRef.clientWidth / currentRef.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Make background transparent
        renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
        currentRef.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            currentRef.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: '0', left: '0' }} />;
};

export default ThreeScene;
