'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleEffect = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        camera.position.z = 5;
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setClearColor(0x000000, 1); // Set the background to a dark color
        mount.appendChild(renderer.domElement);

        // Particle system
        const particles = new THREE.BufferGeometry();
        const particleCount = 5000;
        const positions = new Float32Array(particleCount * 2);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = Math.random() * 10 - 5;
            positions[i * 3 + 1] = Math.random() * 10 - 5;
            positions[i * 3 + 2] = Math.random() * 10 - 5;
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 }); // Light color and smaller size
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        const animate = () => {
            requestAnimationFrame(animate);

            particleSystem.rotation.y += 0.001;
            particleSystem.rotation.x += 0.001;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ParticleEffect;
