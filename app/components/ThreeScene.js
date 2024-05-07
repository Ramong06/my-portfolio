"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentRef.clientWidth / currentRef.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
        currentRef.appendChild(renderer.domElement);

        // Ambient light for overall illumination with less intensity
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        // Directional light for sunlight-like effects
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0); // Adjust as needed
        scene.add(directionalLight);

        // Spotlight for focused highlights
        const spotLight = new THREE.SpotLight(0xffffff, 0.5, 10, Math.PI / 6, 0.25);
        spotLight.position.set(2, 3, 3);
        scene.add(spotLight);

        // Additional Point Light for extra highlights
        const pointLight = new THREE.PointLight(0xffffff, 0.6, 50);
        pointLight.position.set(-5, -3, 5);
        scene.add(pointLight);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0xB87333,  // Copper color
            metalness: 0.9,
            roughness: 0.2
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
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
