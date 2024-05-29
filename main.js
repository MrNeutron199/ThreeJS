import * as THREE from "three";

import { SpotLight, PointLight } from "./Components/Lights.js";
import { Scene, Controls } from "./Components/Base.js";
import { Loader, model, mixer } from "./Components/Loader.js";
import UI from "./Components/GUI.js";

const { renderer, scene } = new Scene();
const container = document.querySelector("#webgl");
const ratio = window.innerWidth / window.innerHeight;
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 100);
const { controls } = new Controls(camera, renderer.domElement);

const MLoader = new Loader();
MLoader.load("LittlestTokyo.glb", camera, scene, renderer, {
  x: -0.2,
  y: 1.3,
  z: -0.3,
  rotation: 1.99,
});
const point1 = new PointLight(scene, -1.5, 2, -3);
const point2 = new PointLight(scene, 4, 3, 3);
const point3 = new PointLight(scene, 2, 2, -1);
const light1 = new SpotLight(scene);
//   gsap.to(camera.position, {
//     x: 4,
//     y: 4,
//     z: 4,
//     duration: 5,
//   });
// }, 7000);
camera.position.set(-3, 3, 9);
// const gui = new UI(camera);
// const set = {
//   x: camera.position.x,
//   y: camera.position.y,
//   z: camera.position.z,
//   // rotation: 0,
// };
// gui.setup(set);
// gui.gui.add(set, "rotation").onChange((val) => {
//   camera.rotation.y = set.rotation;
// });

window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
const mesh = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
);
mesh.rotation.x = -Math.PI / 2;
mesh.receiveShadow = true;
mesh.position.y = -0.6;
scene.add(mesh);

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  const delta = clock.getDelta();
  scene.updateMatrixWorld();
  if (mixer) mixer.update(delta);
  renderer.render(scene, camera);
}
animate();
