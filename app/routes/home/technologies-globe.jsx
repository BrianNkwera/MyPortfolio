import React, { useRef, useEffect } from 'react';
import { useInViewport, useWindowSize } from '~/hooks';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  Vector3,
  BufferGeometry,
  LineBasicMaterial,
  Line,
  CanvasTexture,
  SpriteMaterial,
  Sprite,
  AmbientLight,
  DirectionalLight,
} from 'three';
import { cleanRenderer, cleanScene } from '~/utils/three';

// Configuration constants
const CONFIG = {
  GLOBE_RADIUS: 5,
  GLOBE_TILT: (156.5 * Math.PI) / 180,
  SATELLITE_DISTANCE: 6,
  LONGITUDE_LINES: 50,
  LATITUDE_LINES: 50,
  ANIMATION_SPEED: 0.0025,
  CAMERA_FOV: 54,
  CAMERA_NEAR: 0.1,
  CAMERA_FAR: 1000,
  TECHNOLOGIES: [
    { name: 'React', color: 0xf4816d, lat: 30, lon: 0 },
    { name: 'Vue', color: 0xf4816d, lat: -20, lon: 60 },
    { name: 'ASP', color: 0xf4816d, lat: 45, lon: 120 },
    { name: 'Node', color: 0xf4816d, lat: -35, lon: 180 },
    { name: 'Nest', color: 0xf4816d, lat: 15, lon: 240 },
    { name: 'TS', color: 0xf4816d, lat: -45, lon: 300 },
  ],
  ICON_SYMBOLS: {
    React: '⚛',
    Vue: 'V',
    ASP: '.NET',
    Node: 'JS',
    Nest: '🚀',
    TS: 'TS',
  },
};

// Utility functions

// Main component
const TechSphereAnimation = ({ className, style }) => {
  const mountRef = useRef();
  const renderer = useRef();
  const frameRef = useRef();
  const scene = useRef();
  const camera = useRef();
  const isInViewport = useInViewport();
  const initRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current || initRef.current) return;
    
    initRef.current = true;

    // Initialize Three.js scene
    scene.current = createScene();
    camera.current = createCamera(mountRef.current);
    renderer.current = createRenderer(mountRef.current);

    // Create globe
    const globeGroup = createGlobe(CONFIG.GLOBE_RADIUS);
    scene.current.add(globeGroup);

    // Create satellites
    const { satelliteGroup, satellites } = createSatellites(
      CONFIG.TECHNOLOGIES,
      CONFIG.SATELLITE_DISTANCE
    );
    scene.current.add(satelliteGroup);

    // Setup lighting
    setupLighting(scene.current);

    // Start animation
    frameRef.current = createAnimationLoop(
      renderer.current,
      scene.current,
      camera.current,
      globeGroup,
      satellites
    );

    // Handle window resize
    const handleResize = createResizeHandler(
      camera.current,
      renderer.current,
      mountRef.current
    );
    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
        cleanScene(scene.current);
        cleanRenderer(renderer.current);
    };
  }, []);

  useEffect(() => {
    console.log('hello');
  }, [isInViewport])

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '600px',
        height: '600px',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.8,
        ...style,
      }}
    />
  );
};

const createVector3 = (x, y, z) => new Vector3(x, y, z);

const degToRad = (degrees) => (degrees * Math.PI) / 180;

const calculateSpherePosition = (radius, lat, lon) => {
  const latRad = degToRad(lat);
  const lonRad = degToRad(lon);
  const x = radius * Math.cos(latRad) * Math.cos(lonRad);
  const y = radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.sin(lonRad);
  return { x, y, z };
};

// Globe creation functions
const createLongitudeLines = (radius, lineCount) => {
  const lines = [];
  
  for (let i = 0; i < lineCount; i++) {
    const longitude = (i / lineCount) * Math.PI * 2;
    const points = [];

    for (let j = 0; j <= 64; j++) {
      const latitude = (j / 64) * Math.PI - Math.PI / 2;
      const x = radius * Math.cos(latitude) * Math.cos(longitude);
      const y = radius * Math.sin(latitude);
      const z = radius * Math.cos(latitude) * Math.sin(longitude);
      points.push(createVector3(x, y, z));
    }

    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({
      color: 0xf4816d,
      transparent: true,
      opacity: 0.7,
      linewidth: 2,
    });

    lines.push(new Line(geometry, material));
  }
  
  return lines;
};

const createLatitudeLines = (radius, lineCount) => {
  const lines = [];
  
  for (let i = -10; i < lineCount; i++) {
    const lat = i * 15;
    const latRad = degToRad(lat);
    const circleRadius = radius * Math.cos(latRad);
    const y = radius * Math.sin(latRad);

    const points = [];
    for (let j = 0; j <= 64; j++) {
      const angle = (j / 64) * Math.PI * 2;
      const x = circleRadius * Math.cos(angle);
      const z = circleRadius * Math.sin(angle);
      points.push(createVector3(x, y, z));
    }

    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({
      color: 0xf4816d,
      transparent: true,
      opacity: lat === 0 ? 0.9 : 0.5,
      linewidth: lat === 0 ? 3 : 2,
    });

    lines.push(new Line(geometry, material));
  }
  
  return lines;
};

const createGlobe = (radius) => {
  const globeGroup = new Group();
  globeGroup.rotation.z = CONFIG.GLOBE_TILT;

  const longitudeLines = createLongitudeLines(radius, CONFIG.LONGITUDE_LINES);
  const latitudeLines = createLatitudeLines(radius, CONFIG.LATITUDE_LINES);

  [...longitudeLines, ...latitudeLines].forEach(line => {
    globeGroup.add(line);
  });

  return globeGroup;
};

// Satellite creation functions
const createIconCanvas = (tech) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 200;
  canvas.height = 200;

  // Draw solid icon background
  context.fillStyle = `#${tech.color.toString(16).padStart(6, '0')}`;
  context.beginPath();
  context.arc(100, 100, 70, 0, Math.PI * 2);
  context.fill();

  // Add border
  context.strokeStyle = '#ffffff';
  context.lineWidth = 4;
  context.stroke();

  // Draw icon text/symbol
  context.fillStyle = '#000000';
  context.font = 'bold 120px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(CONFIG.ICON_SYMBOLS[tech.name] || tech.name, 100, 100);

  return canvas;
};

const createSatellite = (tech, satelliteDistance) => {
  const canvas = createIconCanvas(tech);
  const texture = new CanvasTexture(canvas);
  const spriteMaterial = new SpriteMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.01,
  });
  
  const sprite = new Sprite(spriteMaterial);
  sprite.scale.set(0, 0, 0);
  sprite.position.set(0, 0, 0);

  const finalPosition = calculateSpherePosition(satelliteDistance, tech.lat, tech.lon);

  return {
    sprite,
    lat: tech.lat,
    lon: tech.lon,
    originalLon: tech.lon,
    finalPosition,
    explosionVector: {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: (Math.random() - 0.5) * 2,
    },
    explosionSpeed: 0.5 + Math.random() * 0.5,
  };
};

const createSatellites = (technologies, satelliteDistance) => {
  const satelliteGroup = new Group();
  const satellites = [];

  technologies.forEach(tech => {
    const satellite = createSatellite(tech, satelliteDistance);
    satelliteGroup.add(satellite.sprite);
    satellites.push(satellite);
  });

  return { satelliteGroup, satellites };
};

// Lighting setup
const setupLighting = (scene) => {
  const ambientLight = new AmbientLight(0x404040, 0.4);
  const keyLight = new DirectionalLight(0xffffff, 1.2);
  const fillLight = new DirectionalLight(0x8888ff, 0.3);
  const rimLight = new DirectionalLight(0xffaa88, 0.4);

  keyLight.position.set(10, 5, 5);
  fillLight.position.set(-5, 3, -5);
  rimLight.position.set(0, 0, -10);

  [ambientLight, keyLight, fillLight, rimLight].forEach(light => {
    scene.add(light);
  });
};

// Scene setup
const createScene = () => new Scene();

const createCamera = (container) => {
  const camera = new PerspectiveCamera(
    CONFIG.CAMERA_FOV,
    container.clientWidth / container.clientHeight,
    CONFIG.CAMERA_NEAR,
    CONFIG.CAMERA_FAR
  );
  camera.position.set(0, 3, 12);
  camera.lookAt(0, 0, 0);
  return camera;
};

const createRenderer = (container) => {
  const renderer = new WebGLRenderer({
    antialias: false,
    alpha: true,
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  return renderer;
};

// Animation functions
const updateSatellites = (satellites, globeGroup, camera, time, satelliteDistance) => {
  satellites.forEach((sat, index) => {
    const latRad = degToRad(sat.lat);
    const lonRad = degToRad(sat.originalLon + (globeGroup.rotation.y * 180) / Math.PI);

    const x = satelliteDistance * Math.cos(latRad) * Math.cos(lonRad);
    const y = satelliteDistance * Math.sin(latRad) + Math.sin(time + index) * 0.1;
    const z = satelliteDistance * Math.cos(latRad) * Math.sin(lonRad);

    sat.sprite.position.set(x, y, z);
    sat.sprite.lookAt(camera.position);
    
    const scale = 1.2 + Math.sin(time * 2 + index) * 0.05;
    sat.sprite.scale.set(scale, scale, 1);
  });
};

const createAnimationLoop = (renderer, scene, camera, globeGroup, satellites) => {
  let time = 0;
  let frameId;

  const animate = () => {
    frameId = requestAnimationFrame(animate);
    time += 0.016;

    globeGroup.rotation.y += CONFIG.ANIMATION_SPEED;
    updateSatellites(satellites, globeGroup, camera, time, CONFIG.SATELLITE_DISTANCE);
    renderer.render(scene, camera);
  };

  animate();
  return frameId;
};

// Resize handler
const createResizeHandler = (camera, renderer, container) => {
  return () => {
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
};



export { TechSphereAnimation };