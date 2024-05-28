import * as THREE from "three";

import { SpotLight, PointLight } from "./Components/Lights.js";
import { Scene, Controls } from "./Components/Base.js";
import { Loader as MLoader, model, mixer } from "./Components/Loader.js";

const { renderer, scene } = new Scene();
const container = document.querySelector("#webgl");
const ratio = window.innerWidth / window.innerHeight;
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 100);
const { controls } = new Controls(camera, renderer.domElement);

const Loader = new MLoader();
Loader.load("LittlestTokyo.glb", camera, scene, renderer, {
  x: -0.2,
  y: 1.3,
  z: -0.3,
  rotation: 1.99,
});

const point1 = new PointLight(scene, -1.5, 2, -3);
const point2 = new PointLight(scene, 4, 3, 3);
const point3 = new PointLight(scene, 2, 2, -1);
const light1 = new SpotLight(scene);

camera.position.set(-3, 3, 9);
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
const clock = new THREE.Clock();
const mesh = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
);
mesh.rotation.x = -Math.PI / 2;
mesh.receiveShadow = true;
mesh.position.y = -0.6;
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  renderer.render(scene, camera);
  // cssrenderer.render(cssscene, camera);
}
animate();
