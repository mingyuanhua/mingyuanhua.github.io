import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5); // 设置相机位置
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // 设置相机视角朝向原点

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 创建太阳、地球和月球的几何体和材质
    const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xfdb813 });
    const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const moonGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const moonMaterial = new THREE.MeshBasicMaterial({ color: 0x777777 });

    // 创建太阳、地球和月球的网格对象
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);

    // 设置地球和月球的初始位置
    earthMesh.position.x = 4; // 地球绕着 x 轴移动 4 个单位
    moonMesh.position.x = 1; // 月球绕着 x 轴移动 1 个单位

    // 将地球和月球添加到太阳上
    sunMesh.add(earthMesh);
    earthMesh.add(moonMesh);

    // 将太阳、地球和月球添加到场景中
    scene.add(sunMesh);

    // 创建一个控制器控制场景中的物体
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = true; // 启用旋转控制

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);

      // 更新太阳、地球和月球的旋转
      sunMesh.rotation.y += 0.001;
      earthMesh.rotation.y += 0.01;
      moonMesh.rotation.y += 0.02;

      // 渲染场景
      renderer.render(scene, camera);
    };

    // 启动动画循环
    animate();

    // 清除资源
    return () => {
      scene.remove(sunMesh);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

export default Game;
