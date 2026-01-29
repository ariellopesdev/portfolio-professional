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

export default function SolarSystemBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    /* ================= SCENE ================= */
    const scene = new THREE.Scene();

    /* ================= CAMERA ================= */
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      0.1,
      5000,
    );
    camera.position.z = 1100;

    /* ================= RENDER ================= */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    /* ================= LIGHT ================= */
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    const sunLight = new THREE.PointLight(0xffffff, 2.2, 2000);
    sunLight.castShadow = true;
    scene.add(sunLight);

    /* ================= TEXTURE LOADER ================= */
    const loader = new THREE.TextureLoader();
    const loadTexture = (src) => {
      const tex = loader.load(src);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    };

    /* ================= SOLAR SYSTEM ================= */
    const solarSystem = new THREE.Group();
    scene.add(solarSystem);

    solarSystem.rotation.z = THREE.MathUtils.degToRad(12);
    solarSystem.rotation.x = THREE.MathUtils.degToRad(10);

    /* ================= SUN ================= */
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(50, 64, 64),
      new THREE.MeshBasicMaterial({ map: loadTexture(sunTex) }),
    );
    solarSystem.add(sun);
    sunLight.position.copy(sun.position);

    /* ================= PLANETS DATA ================= */
    const planetsData = [
      {
        tex: mercuryTex,
        size: 6,
        dist: 195,
        orbitSpeed: 0.04,
        rotationSpeed: 0.004,
        axialTilt: 0.03,
        orbitTilt: 7,
        retro: false,
      },
      {
        tex: venusTex,
        size: 9,
        dist: 270,
        orbitSpeed: 0.015,
        rotationSpeed: 0.001,
        axialTilt: 177,
        orbitTilt: 3.4,
        retro: true,
      },
      {
        tex: earthTex,
        size: 10,
        dist: 345,
        orbitSpeed: 0.01,
        rotationSpeed: 0.02,
        axialTilt: 23.4,
        orbitTilt: 0,
        retro: false,
      },
      {
        tex: marsTex,
        size: 8,
        dist: 435,
        orbitSpeed: 0.008,
        rotationSpeed: 0.018,
        axialTilt: 25.4,
        orbitTilt: 1.85,
        retro: false,
      },
      {
        tex: jupiterTex,
        size: 22,
        dist: 570,
        orbitSpeed: 0.004,
        rotationSpeed: 0.05,
        axialTilt: 3.1,
        orbitTilt: 1.3,
        retro: false,
      },
      {
        tex: saturnTex,
        size: 20,
        dist: 720,
        orbitSpeed: 0.003,
        rotationSpeed: 0.045,
        axialTilt: 26.7,
        orbitTilt: 2.5,
        rings: "saturn",
        retro: false,
      },
      {
        tex: uranusTex,
        size: 16,
        dist: 870,
        orbitSpeed: 0.002,
        rotationSpeed: 0.03,
        axialTilt: 97.8,
        orbitTilt: 0.8,
        rings: "uranus",
        retro: true,
      },
      {
        tex: neptuneTex,
        size: 16,
        dist: 1020,
        orbitSpeed: 0.0015,
        rotationSpeed: 0.032,
        axialTilt: 28.3,
        orbitTilt: 1.8,
        retro: false,
      },
    ];

    const planets = [];

    planetsData.forEach((p) => {
      const orbitPivot = new THREE.Object3D();
      orbitPivot.rotation.z = THREE.MathUtils.degToRad(p.orbitTilt);
      solarSystem.add(orbitPivot);

      const rotationPivot = new THREE.Object3D();
      orbitPivot.add(rotationPivot);

      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(p.size, 48, 48),
        new THREE.MeshStandardMaterial({
          map: loadTexture(p.tex),
          roughness: 0.45,
          metalness: 0,
        }),
      );
      planet.castShadow = true;
      planet.receiveShadow = true;

      planet.position.x = p.dist;
      planet.rotation.z = THREE.MathUtils.degToRad(p.axialTilt);
      rotationPivot.add(planet);

      let ring = null;

      if (p.rings) {
        ring = new THREE.Mesh(
          new THREE.RingGeometry(
            p.size * (p.rings === "saturn" ? 1.3 : 1.2),
            p.size * (p.rings === "saturn" ? 2.2 : 1.8),
            64,
          ),
          new THREE.MeshStandardMaterial({
            color: p.rings === "saturn" ? 0xd8cfc4 : 0xbfdfe3,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: p.rings === "saturn" ? 0.85 : 0.6,
          }),
        );

        // 🔑 1. RingGeometry nasce no plano XY → deitar para XZ
        ring.rotation.x = Math.PI / 2;

        // 🔑 2. Aplicar o MESMO eixo axial do planeta
        ring.rotation.z = THREE.MathUtils.degToRad(p.axialTilt);

        ring.receiveShadow = true;
        planet.add(ring);
      }

      planets.push({
        orbitPivot,
        planet,
        ring,
        orbitSpeed: p.orbitSpeed,
        rotationSpeed: p.rotationSpeed,
        retro: p.retro,
      });
    });

    /* ================= POSITION ================= */
    const placeSolarSystemOnScreen = () => {
      solarSystem.position.set(
        window.innerWidth / 2 - 150,
        window.innerHeight / 2 - 150,
        0,
      );
    };

    placeSolarSystemOnScreen();

    /* ================= ANIMATION ================= */
    const animate = () => {
      sun.rotation.y += 0.001;

      planets.forEach((p) => {
        p.orbitPivot.rotation.y += p.orbitSpeed;

        const rot = p.retro ? -p.rotationSpeed : p.rotationSpeed;
        p.planet.rotation.y += rot;

        if (p.ring) p.ring.rotation.z += rot;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    /* ================= RESIZE ================= */
    const onResize = () => {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      placeSolarSystemOnScreen();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="solar-system-background" />;
}
