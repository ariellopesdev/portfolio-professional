import "./SolarSystemBackground.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import sunTex from "../../assets/textures/planets/sun.jpg";
import mercuryTex from "../../assets/textures/planets/mercury.jpg";
import venusTex from "../../assets/textures/planets/venus.jpg";
import earthTex from "../../assets/textures/planets/earth.jpg";
import marsTex from "../../assets/textures/planets/mars.jpg";
import jupiterTex from "../../assets/textures/planets/jupiter.jpg";
import saturnTex from "../../assets/textures/planets/saturn.jpg";
import uranusTex from "../../assets/textures/planets/uranus.jpg";
import neptuneTex from "../../assets/textures/planets/neptune.jpg";
import starsTex from "../../assets/textures/planets/stars.jpg";

export default function SolarSystemBackground() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null); // guardamos o renderer aqui

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ================= SCENE ================= */
    const scene = new THREE.Scene();

    /* ================= CAMERA ================= */
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2, window.innerWidth / 2,
      window.innerHeight / 2, window.innerHeight / -2,
      0.1, 5000
    );
    camera.position.z = 1100;

    /* ================= RENDERER ================= */
    // Verifica se já existe um renderer (evita duplicar)
    let renderer = rendererRef.current;
    if (!renderer) {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2; 
      mount.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    }

    /* ================= LIGHT ================= */
    scene.add(new THREE.AmbientLight(0xffffff, 0.05));
    const sunLight = new THREE.PointLight(0xffffff, 15, 2000, 0); 
    scene.add(sunLight);

    /* ================= TEXTURE LOADER ================= */
    const loader = new THREE.TextureLoader();
    const loadTexture = (src) => {
      const tex = loader.load(src);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    /* ================= BACKGROUND ================= */
    const backgroundPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(window.innerWidth * 2, window.innerHeight * 2),
      new THREE.MeshBasicMaterial({ map: loadTexture(starsTex), side: THREE.DoubleSide })
    );
    backgroundPlane.position.z = -2000;
    scene.add(backgroundPlane);

    /* ================= SOLAR SYSTEM ================= */
    const solarSystem = new THREE.Group();
    scene.add(solarSystem);
    solarSystem.rotation.z = THREE.MathUtils.degToRad(12);
    solarSystem.rotation.x = THREE.MathUtils.degToRad(8);

    const sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(50, 64, 64),
      new THREE.MeshStandardMaterial({ 
        map: loadTexture(sunTex), 
        emissive: 0xff8800, 
        emissiveIntensity: 2.2 
      })
    );
    solarSystem.add(sunMesh);

    const sunGlowCanvas = document.createElement("canvas");
    sunGlowCanvas.width = 64; sunGlowCanvas.height = 64;
    const ctxS = sunGlowCanvas.getContext("2d");
    const gradS = ctxS.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradS.addColorStop(0, "rgba(255, 200, 100, 0.8)");
    gradS.addColorStop(1, "rgba(255, 0, 0, 0)");
    ctxS.fillStyle = gradS; ctxS.fillRect(0, 0, 64, 64);
    const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(sunGlowCanvas), blending: THREE.AdditiveBlending }));
    sunGlow.scale.set(200, 200, 1);
    sunMesh.add(sunGlow);

    const planetsData = [
      { tex: mercuryTex, size: 6, dist: 195, orbitSpeed: 0.012, rotationSpeed: 0.012, axialTilt: 0.03, orbitTilt: 7 },
      { tex: venusTex, size: 9, dist: 270, orbitSpeed: 0.0045, rotationSpeed: 0.003, axialTilt: 177, orbitTilt: 3.4, retro: true },
      { tex: earthTex, size: 10, dist: 345, orbitSpeed: 0.003, rotationSpeed: 0.06, axialTilt: 23.4, orbitTilt: 0 },
      { tex: marsTex, size: 8, dist: 435, orbitSpeed: 0.0024, rotationSpeed: 0.054, axialTilt: 25.4, orbitTilt: 1.85 },
      { tex: jupiterTex, size: 22, dist: 570, orbitSpeed: 0.0012, rotationSpeed: 0.15, axialTilt: 3.1, orbitTilt: 1.3 },
      { tex: saturnTex, size: 20, dist: 720, orbitSpeed: 0.0009, rotationSpeed: 0.135, axialTilt: 26.7, orbitTilt: 2.5, rings: "saturn" },
      { tex: uranusTex, size: 16, dist: 870, orbitSpeed: 0.0006, rotationSpeed: 0.09, axialTilt: 97.8, orbitTilt: 0.8, rings: "uranus", retro: true },
      { tex: neptuneTex, size: 16, dist: 1020, orbitSpeed: 0.00045, rotationSpeed: 0.096, axialTilt: 28.3, orbitTilt: 1.8 },
    ];

    const planets = [];
    planetsData.forEach((p) => {
      const orbitPivot = new THREE.Object3D();
      orbitPivot.rotation.x = THREE.MathUtils.degToRad(p.orbitTilt);
      solarSystem.add(orbitPivot);
      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(p.size, 32, 32),
        new THREE.MeshStandardMaterial({ map: loadTexture(p.tex), metalness: 0.1, roughness: 0.8 })
      );
      planet.position.set(p.dist, 0, 0);
      planet.rotation.x = THREE.MathUtils.degToRad(p.axialTilt);
      orbitPivot.add(planet);
      if (p.rings) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(p.size * 1.4, p.size * 2.2, 64),
          new THREE.MeshStandardMaterial({ color: p.rings === "saturn" ? 0xd8cfc4 : 0xbfdfe3, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
        );
        ring.rotation.x = Math.PI / 2;
        planet.add(ring);
      }
      planets.push({ orbitPivot, planet, orbitSpeed: p.orbitSpeed, rotationSpeed: p.rotationSpeed, retro: p.retro });
    });

    const placeSolarSystemOnScreen = () => {
      solarSystem.position.set(window.innerWidth / 2 - 450, window.innerHeight / 2 - 300, 0);
    };
    placeSolarSystemOnScreen();

    /* ================= ANIMATION ================= */
    const animate = () => {
      sunMesh.rotation.y += 0.001;
      planets.forEach((p) => {
        p.orbitPivot.rotation.y += p.orbitSpeed;
        p.planet.rotation.y += p.retro ? -p.rotationSpeed : p.rotationSpeed;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    /* ================= RESIZE ================= */
    const onResize = () => {
      camera.left = window.innerWidth / -2; camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2; camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      placeSolarSystemOnScreen();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      // cleanup renderer
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement) {
          rendererRef.current.domElement.remove();
        }
        rendererRef.current = null;
      }
    };
  }, []);

  return <div ref={mountRef} className="solar-system-background" />;
}
