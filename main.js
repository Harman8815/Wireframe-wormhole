// Importing required libraries and modules
import * as THREE from "three"; 
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; 
import spline from "./spline.js"; 
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"; 
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"; 
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"; 
import { GUI } from "lil-gui"; 

// Scene, camera, and renderer setup
const w = window.innerWidth; 
const h = window.innerHeight; 
const scene = new THREE.Scene(); 
scene.fog = new THREE.FogExp2(0x000000, 0.52); // Set fog density

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000); 
camera.position.z = 5; // Position camera

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize(w, h); 
renderer.toneMapping = THREE.ACESFilmicToneMapping; 
renderer.outputColorSpace = THREE.SRGBColorSpace; 
document.body.appendChild(renderer.domElement); 

// Orbit controls setup
const controls = new OrbitControls(camera, renderer.domElement); 
controls.enableDamping = true; 
controls.dampingFactor = 0.03; 

// Post-processing setup
const renderScene = new RenderPass(scene, camera); 
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100); 
bloomPass.threshold = 0.002; 
bloomPass.strength = 3.5; 
bloomPass.radius = 0; 

const composer = new EffectComposer(renderer); 
composer.addPass(renderScene); 
composer.addPass(bloomPass); 

// Geometry and materials creation
const points = spline.getPoints(100); 
const geometry = new THREE.BufferGeometry().setFromPoints(points); 
const material = new THREE.LineBasicMaterial({ color: 0xff0000 }); 
const line = new THREE.Line(geometry, material); 

const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true); 
const edges = new THREE.EdgesGeometry(tubeGeo, 0.2); 
const lineMat = new THREE.LineBasicMaterial({ color: 0xff0000 }); 
const tubeLines = new THREE.LineSegments(edges, lineMat); 
scene.add(tubeLines); 

// Creating boxes along the tube path
const numBoxes = 55; 
const size = 0.075; 
const boxGeo = new THREE.BoxGeometry(size, size, size); 
for (let i = 0; i < numBoxes; i += 1) {
  const boxMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const box = new THREE.Mesh(boxGeo, boxMat);
  const p = (i / numBoxes + Math.random() * 0.1) % 1;
  const pos = tubeGeo.parameters.path.getPointAt(p);
  pos.x += Math.random() - 0.4;
  pos.z += Math.random() - 0.4;
  box.position.copy(pos);
  const rote = new THREE.Vector3(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );
  box.rotation.set(rote.x, rote.y, rote.z);
  const edges = new THREE.EdgesGeometry(boxGeo, 0.2);
  const color = new THREE.Color().setHSL(0.7 - p, 1, 0.5);
  const lineMat = new THREE.LineBasicMaterial({ color });
  const boxLines = new THREE.LineSegments(edges, lineMat);
  boxLines.position.copy(pos);
  boxLines.rotation.set(rote.x, rote.y, rote.z);
  scene.add(boxLines);
}

// GUI setup for interactive controls
const gui = new GUI();
const params = {
  tubeColor: 0xff0000,
  bloomStrength: 3.9,
  bloomThreshold: 0.002,
  bloomRadius: 0.02,
  fogDensity: 0.52,
  speed: 10,
};

// Adding controls to the GUI
gui.addColor(params, 'tubeColor').onChange((value) => {
  tubeLines.material.color.set(value); // Change tube color
});
gui.add(params, 'bloomStrength', 0, 10, 0.1).onChange((value) => {
  bloomPass.strength = value; // Adjust bloom strength
});
gui.add(params, 'bloomThreshold', 0, 0.2, 0.001).onChange((value) => {
  bloomPass.threshold = value; // Adjust bloom threshold
});
gui.add(params, 'bloomRadius', 0, 1).onChange((value) => {
  bloomPass.radius = value; // Adjust bloom radius
});
gui.add(params, 'speed', 0, 10,1).onChange((value) => {
  speed = value; // Adjust speed
});
gui.add(params, 'fogDensity', 0, 1, 0.01).onChange((value) => {
  scene.fog.density = value; // Adjust fog density
});

let speed = 10; // Default speed

// Camera animation function
function updateCamera(t) {
  const time = t * 0.1;
  const looptime = speed * 1000;
  const p = (time % looptime) / looptime; 
  const pos = tubeGeo.parameters.path.getPointAt(p); 
  const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1); 
  camera.position.copy(pos); 
  camera.lookAt(lookAt); 
}

// Animation loop
function animate(t = 0) {
  requestAnimationFrame(animate);
  updateCamera(t); 
  composer.render(scene, camera); 
  controls.update(); 
}
animate();

// Handle window resizing
function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight; 
  camera.updateProjectionMatrix(); 
  renderer.setSize(window.innerWidth, window.innerHeight); 
}
window.addEventListener('resize', handleWindowResize, false); 
