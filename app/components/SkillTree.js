'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SkillTreeComponent = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(-160, 20, 90); // Zoom in slightly more
        camera.lookAt(new THREE.Vector3(0, 10, 0));

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x00000, 0);
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 6);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
        pointLight.position.set(0, 100, 200);
        scene.add(pointLight);

        const skills = [
            { name: 'JavaScript', level: 15, color: 0xfcc419 },
            { name: 'Python', level: 13, color: 0x306998 },
            { name: 'C#', level: 6, color: 0x239120 },
            { name: 'Java', level: 6, color: 0xF39C12 },
            { name: 'Git', level: 13, color: 0xE74C3C },
        ];

        function createSpriteLabel(text) {
            const canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'transparent';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = '29px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(20, 5, 1);
            return sprite;
        }

        const barMeshes = [];
        skills.forEach((skill, index) => {
            const height = skill.level * 4;
            const geometry = new THREE.BoxGeometry(5, height, 4);
            const material = new THREE.MeshPhongMaterial({ color: skill.color });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(10 * index - (skills.length / 2) * 7.5, (height / 2) - 27, 0);
            scene.add(mesh);

            const label = createSpriteLabel(skill.name);
            label.position.set(mesh.position.x, mesh.position.y - (height / 2) - 5, 0);
            scene.add(label);

            mesh.userData = { label, originalColor: skill.color };
            barMeshes.push(mesh); // Store only the bar meshes
        });

        window.addEventListener('resize', function () {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        });

        const animate = () => {
            requestAnimationFrame(animate);

            scene.rotation.y += 0.005;

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
