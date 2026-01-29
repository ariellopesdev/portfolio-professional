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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

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
    const starsTexture = loadTexture(starsTex);
    const backgroundPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(window.innerWidth * 2, window.innerHeight * 2),
      new THREE.MeshBasicMaterial({
        map: starsTexture,
        side: THREE.DoubleSide,
      }),
    );
    backgroundPlane.position.z = -2000;
    scene.add(backgroundPlane);

    /* ================= STARS PARTICLES COM PROFUNDIDADE E PISCANDO ================= */
    const createStarLayer = (
      count,
      speedRange,
      sizeRange,
      colorRange = [0.7, 1.0],
    ) => {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const velocities = [];
      const sizes = [];
      const brightness = [];

      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * window.innerWidth * 2;
        const y = (Math.random() - 0.5) * window.innerHeight * 2;
        const z = -1000 - Math.random() * 1000; // profundidade
        positions.push(x, y, z);

        const speed =
          speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]);
        velocities.push(speed);

        const size =
          sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
        sizes.push(size);

        const bright =
          colorRange[0] + Math.random() * (colorRange[1] - colorRange[0]);
        brightness.push(bright);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3),
      );
      geometry.setAttribute(
        "velocity",
        new THREE.Float32BufferAttribute(velocities, 1),
      );
      geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));
      geometry.setAttribute(
        "brightness",
        new THREE.Float32BufferAttribute(brightness, 1),
      );

      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);
      return points;
    };

    const starLayer1 = createStarLayer(500, [0.02, 0.05], [0.5, 2]);
    const starLayer2 = createStarLayer(300, [0.005, 0.015], [1.5, 3]);

    /* ================= SOLAR SYSTEM ================= */
    const solarSystem = new THREE.Group();
    scene.add(solarSystem);
    solarSystem.rotation.z = THREE.MathUtils.degToRad(12);
    solarSystem.rotation.x = THREE.MathUtils.degToRad(8);

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(50, 64, 64),
      new THREE.MeshStandardMaterial({
        map: loadTexture(sunTex),
        emissive: new THREE.Color(0xff8800),
        emissiveIntensity: 2,
      }),
    );
    solarSystem.add(sun);

    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 200, 100, .8)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    const glowTexture = new THREE.CanvasTexture(canvas);
    const sunGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color: 0xffaa00,
        transparent: true,
        blending: THREE.AdditiveBlending,
      }),
    );
    sunGlow.scale.set(180, 180, 1);
    sun.add(sunGlow);

    const planetsData = [
      {
        tex: mercuryTex,
        size: 6,
        dist: 195,
        orbitSpeed: 0.012,
        rotationSpeed: 0.012,
        axialTilt: 0.03,
        orbitTilt: 7,
      },
      {
        tex: venusTex,
        size: 9,
        dist: 270,
        orbitSpeed: 0.0045,
        rotationSpeed: 0.003,
        axialTilt: 177,
        orbitTilt: 3.4,
        retro: true,
      },
      {
        tex: earthTex,
        size: 10,
        dist: 345,
        orbitSpeed: 0.003,
        rotationSpeed: 0.06,
        axialTilt: 23.4,
        orbitTilt: 0,
      },
      {
        tex: marsTex,
        size: 8,
        dist: 435,
        orbitSpeed: 0.0024,
        rotationSpeed: 0.054,
        axialTilt: 25.4,
        orbitTilt: 1.85,
      },
      {
        tex: jupiterTex,
        size: 22,
        dist: 570,
        orbitSpeed: 0.0012,
        rotationSpeed: 0.15,
        axialTilt: 3.1,
        orbitTilt: 1.3,
      },
      {
        tex: saturnTex,
        size: 20,
        dist: 720,
        orbitSpeed: 0.0009,
        rotationSpeed: 0.135,
        axialTilt: 26.7,
        orbitTilt: 2.5,
        rings: "saturn",
      },
      {
        tex: uranusTex,
        size: 16,
        dist: 870,
        orbitSpeed: 0.0006,
        rotationSpeed: 0.09,
        axialTilt: 97.8,
        orbitTilt: 0.8,
        rings: "uranus",
        retro: true,
      },
      {
        tex: neptuneTex,
        size: 16,
        dist: 1020,
        orbitSpeed: 0.00045,
        rotationSpeed: 0.096,
        axialTilt: 28.3,
        orbitTilt: 1.8,
      },
    ];

    const planets = [];
    planetsData.forEach((p) => {
      const orbitPivot = new THREE.Object3D();
      orbitPivot.rotation.x = THREE.MathUtils.degToRad(p.orbitTilt);
      solarSystem.add(orbitPivot);

      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(p.size, 32, 32),
        new THREE.MeshStandardMaterial({
          map: loadTexture(p.tex),
          metalness: 0.1,
          roughness: 0.8,
        }),
      );

      planet.position.set(p.dist, 0, 0);
      planet.rotation.x = THREE.MathUtils.degToRad(p.axialTilt);
      orbitPivot.add(planet);

      if (p.rings) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(p.size * 1.4, p.size * 2.2, 64),
          new THREE.MeshStandardMaterial({
            color: p.rings === "saturn" ? 0xd8cfc4 : 0xbfdfe3,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.7,
          }),
        );
        ring.rotation.x = Math.PI / 2;
        planet.add(ring);
      }

      planets.push({
        orbitPivot,
        planet,
        orbitSpeed: p.orbitSpeed,
        rotationSpeed: p.rotationSpeed,
        retro: p.retro,
      });
    });

    const placeSolarSystemOnScreen = () => {
      solarSystem.position.set(
        window.innerWidth / 2 - 450,
        window.innerHeight / 2 - 200,
        0,
      );
    };
    placeSolarSystemOnScreen();

    /* ================= ANIMATION ================= */

    const animate = () => {
      sun.rotation.y += 0.001;

      planets.forEach((p) => {
        p.orbitPivot.rotation.y += p.orbitSpeed;
        p.planet.rotation.y += p.retro ? -p.rotationSpeed : p.rotationSpeed;
      });

      const moveStars = (layer, speedFactor) => {
        const positions = layer.geometry.attributes.position.array;
        const velocities = layer.geometry.attributes.velocity.array;
        const brightness = layer.geometry.attributes.brightness.array;

        for (let i = 0; i < positions.length; i += 3) {
          // MOVIMENTO PARA ESQUERDA
          positions[i] -= velocities[i / 3] * speedFactor;

          // Piscada aleatória
          brightness[i / 3] = 0.5 + Math.random() * 0.05;
          layer.material.opacity = brightness[i / 3];

          if (positions[i] < -window.innerWidth) {
            positions[i] = window.innerWidth;
            positions[i + 1] = (Math.random() - 0.5) * window.innerHeight * 2;
            positions[i + 2] = -1000 - Math.random() * 1000;
          }
        }

        layer.geometry.attributes.position.needsUpdate = true;
      };

      // 🚀 Velocidade ligeiramente maior
      moveStars(starLayer1, 1); // camada próxima
      moveStars(starLayer2, 0.5); // camada distante

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
      backgroundPlane.scale.set(
        window.innerWidth / 2,
        window.innerHeight / 2,
        1,
      );
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
