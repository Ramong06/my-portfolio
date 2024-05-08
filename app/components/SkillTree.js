'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SkillTreeComponent = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(10, 20, 150);
        camera.lookAt(new THREE.Vector3(0, 10, 0));

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 500);
        pointLight.position.set(0, 50, 50); // Adjust position as needed
        scene.add(pointLight);

        // Setting up OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Optional, but this gives a nice inertia feel
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false; // So panning doesn't go into screen space
        controls.minDistance = 100; // Limits for zoom
        controls.maxDistance = 200;
        controls.maxPolarAngle = Math.PI / 2; // Limit angle to prevent flipping

        const skills = [
            { name: 'JavaScript', level: 15, color: 0xfcc419 },
            { name: 'Python', level: 13, color: 0x306998 },
            { name: 'C#', level: 6, color: 0x239120 },
            { name: 'Java', level: 6, color: 0x239120 },
            { name: 'Git', level: 13, color: 0x239120 },
            { name: 'Agile Methodologies', level: 13, color: 0x239120 },
            // Additional skills...
        ];

        skills.forEach((skill, index) => {
            const height = skill.level * 5;
            const geometry = new THREE.BoxGeometry(4, height, 4);
            const material = new THREE.MeshPhongMaterial({
                color: skill.color,
                emissive: skill.color,
                emissiveIntensity: 0.2
            });
            const mesh = new THREE.Mesh(geometry, material);
            // Subtract from the y position to move it down
            mesh.position.set(10 * index - (skills.length / 2) * 10, (height / 2) - 40, 0); 
            scene.add(mesh);
        });

        window.addEventListener('resize', function () {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Only required if controls.enableDamping or controls.autoRotate are set to true
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default SkillTreeComponent;
