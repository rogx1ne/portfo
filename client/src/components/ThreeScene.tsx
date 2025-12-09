import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    objects: THREE.Mesh[];
    particles: THREE.Points;
    animationId: number;
    handleMouseMove: (e: MouseEvent) => void;
    handleResize: () => void;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current || hasError) return;

    const container = containerRef.current;
    
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.warn('WebGL not supported');
        return;
      }
    } catch (e) {
      console.warn('WebGL check failed:', e);
      return;
    }

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let objects: THREE.Mesh[] = [];
    let particles: THREE.Points;
    let animationId = 0;

    try {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 30;

      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const torusGeometry = new THREE.TorusKnotGeometry(4, 1.2, 100, 16);
      const torusMaterial = new THREE.MeshBasicMaterial({
        color: 0xb026ff,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
      torusKnot.position.set(-8, 0, -10);
      scene.add(torusKnot);
      objects.push(torusKnot);

      const icosahedronGeometry = new THREE.IcosahedronGeometry(3, 0);
      const icosahedronMaterial = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
      icosahedron.position.set(12, 5, -15);
      scene.add(icosahedron);
      objects.push(icosahedron);

      const octahedronGeometry = new THREE.OctahedronGeometry(2.5, 0);
      const octahedronMaterial = new THREE.MeshBasicMaterial({
        color: 0xff26b0,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
      octahedron.position.set(8, -6, -12);
      scene.add(octahedron);
      objects.push(octahedron);

      const dodecahedronGeometry = new THREE.DodecahedronGeometry(2, 0);
      const dodecahedronMaterial = new THREE.MeshBasicMaterial({
        color: 0x26ff9e,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
      dodecahedron.position.set(-10, -5, -18);
      scene.add(dodecahedron);
      objects.push(dodecahedron);

      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 500;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const neonColors = [
        [0.69, 0.15, 1],
        [0, 0.83, 1],
        [1, 0.15, 0.69],
        [0.15, 1, 0.62],
      ];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

        const color = neonColors[Math.floor(Math.random() * neonColors.length)];
        colors[i * 3] = color[0];
        colors[i * 3 + 1] = color[1];
        colors[i * 3 + 2] = color[2];
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMouseMove);

      const handleResize = () => {
        if (!container) return;
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener("resize", handleResize);

      sceneRef.current = {
        scene,
        camera,
        renderer,
        objects,
        particles,
        animationId: 0,
        handleMouseMove,
        handleResize,
      };

      const animate = () => {
        animationId = requestAnimationFrame(animate);

        torusKnot.rotation.x += 0.003;
        torusKnot.rotation.y += 0.005;

        icosahedron.rotation.x += 0.004;
        icosahedron.rotation.z += 0.003;

        octahedron.rotation.y += 0.006;
        octahedron.rotation.z += 0.004;

        dodecahedron.rotation.x += 0.002;
        dodecahedron.rotation.y += 0.003;

        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;

        camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);

        if (sceneRef.current) {
          sceneRef.current.animationId = animationId;
        }
      };

      animate();

    } catch (error) {
      console.warn('Three.js initialization failed:', error);
      setHasError(true);
      return;
    }

    return () => {
      if (sceneRef.current) {
        window.removeEventListener("mousemove", sceneRef.current.handleMouseMove);
        window.removeEventListener("resize", sceneRef.current.handleResize);
        cancelAnimationFrame(sceneRef.current.animationId);

        sceneRef.current.objects.forEach((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) (obj.material as THREE.Material).dispose();
        });
        
        if (sceneRef.current.particles) {
          const particleGeom = sceneRef.current.particles.geometry;
          const particleMat = sceneRef.current.particles.material as THREE.Material;
          if (particleGeom) particleGeom.dispose();
          if (particleMat) particleMat.dispose();
        }
        
        if (sceneRef.current.renderer) {
          sceneRef.current.renderer.dispose();
          if (container && container.contains(sceneRef.current.renderer.domElement)) {
            container.removeChild(sceneRef.current.renderer.domElement);
          }
        }
        
        sceneRef.current = null;
      }
    };
  }, [hasError]);

  if (hasError) {
    return (
      <div
        className="absolute inset-0 z-0 w-full h-full min-h-screen bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20"
        data-testid="three-scene-fallback"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 w-full h-full min-h-screen"
      style={{ pointerEvents: "none" }}
      data-testid="three-scene"
    />
  );
}
