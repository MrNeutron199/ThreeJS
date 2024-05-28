import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

import SpotLight from "./Components/SpotLight.js";
import PointLight from "./Components/PointLight.js";
import Scene from "./Components/Scene.js";
import Controls from "./Components/Controls.js";

const { renderer, scene } = new Scene();
const container = document.querySelector("#webgl");
const ratio = window.innerWidth / window.innerHeight;
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 100);
const { controls } = new Controls(camera, renderer.domElement);

let model, mixer;
const loader = new GLTFLoader().setPath("/models/");
const dracoLoader = new DRACOLoader();
loader.setDRACOLoader(dracoLoader);
dracoLoader.setDecoderPath("/draco/");
loader.load(
  "LittlestTokyo.glb",
  async function (gltf) {
    const m = gltf.scene;
    await renderer.compileAsync(m, camera, scene);
    m.position.set(-0.2, 1.3, -0.3);
    m.scale.set(0.01, 0.01, 0.01);
    mixer = new THREE.AnimationMixer(m);
    mixer.clipAction(gltf.animations[0]).play();
    m.traverse(function (object) {
      if (object.isMesh) object.castShadow = true;
    });
    m.name = "Little Shop";
    m.rotation.y = 1.99;
    scene.add(m);
    model = m;
  },
  undefined,
  function (e) {
    console.error(e);
  }
);

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
// const folder2 = gui.addFolder("Coordinates");
// const folder2 = gui.addFolder("Visual settings");
// folder2.add(settings, "animations").onChange(function (val) {
//   if (mixer.isRunning()) {
//     mixer.stop();
//   } else {
//     // mixer.clipAction(scene.children[3]).play();
//     console.log("Want to play");
//   }
// });
// folder2.add(settings, "power").onChange(function (val) {
//   pointLight.power = val;
// });
// folder2.add(settings, "left").onChange(function (val) {
//   dirLight.shadow.camera.left = val;
// });
// folder2.add(settings, "right").onChange(function (val) {
//   dirLight.shadow.camera.right = val;
// });
// folder2.add(settings, "near").onChange(function (val) {
//   dirLight.shadow.camera.near = val;
// });
// folder2.add(settings, "far").onChange(function (val) {
//   dirLight.shadow.camera.far = val;
// });
// const gui = new GUI();
// let settings = {
//   X: 0,
//   Y: 0,
//   Z: 0,
//   rotation: 0,
//   height: 200,
//   width: 200,
//   // intensity: 1,
//   // animations: true,
//   // power: 1,
// };
// let cssscene = new THREE.Scene();
// function createPage(x, y, z, ry) {
//   var div = document.createElement("div");
//   div.style.height = String(settings.height) + "px";
//   div.style.width = String(settings.width) + "px";
//   div.style.backgroundColor = "#fff";

//   var iframe = document.createElement("iframe");
//   iframe.style.width = "100%";
//   iframe.style.height = "100%";
//   // iframe.style.border = "10px";
//   iframe.src = "web.html";
//   div.appendChild(iframe);
//   var cssobject = new CSS3DObject(div);
//   cssobject.position.set(x, y, z);
//   cssobject.scale.set(0.1, 0.1, 0.1);
//   cssscene.add(cssobject);
//   var material = new THREE.MeshPhongMaterial({
//     opacity: 0.0,
//     // color: new THREE.Color("black"),
//     blending: THREE.NoBlending,
//     side: THREE.DoubleSide,
//   });

//   var geometry = new THREE.PlaneGeometry(50, 50);
//   var webglrepresentation = new THREE.Mesh(geometry, material);
//   webglrepresentation.position.copy(cssobject.position);
//   webglrepresentation.rotation.copy(cssobject.rotation);
//   webglrepresentation.scale.copy(cssobject.scale);
//   webglscene.add(webglrepresentation);
//   const folder1 = gui.addFolder("Size");
//   const folder2 = gui.addFolder("Coordinates");

//   folder1.add(settings, "height").onChange(function (val) {
//     div.style.height = settings.height;
//     cssobject.scale.height = settings.height;
//     webglrepresentation.scale.copy(cssobject.scale);
//   });
//   folder1.add(settings, "width").onChange(function (val) {
//     div.style.width = settings.width;
//     cssobject.scale.width = settings.width;
//     webglrepresentation.scale.copy(cssobject.scale);
//   });
//   folder2.add(settings, "X").onChange(function (val) {
//     cssobject.position.x = settings.X;
//     webglrepresentation.position.copy(cssobject.position);
//   });
//   folder2.add(settings, "Y").onChange(function (val) {
//     cssobject.position.y = settings.Y;
//     webglrepresentation.position.copy(cssobject.position);
//   });
//   folder2.add(settings, "Z").onChange(function (val) {
//     cssobject.position.z = settings.Z;
//     webglrepresentation.position.copy(cssobject.position);
//   });
//   folder2.add(settings, "rotation").onChange(function (val) {
//     cssobject.rotation.y = settings.rotation;
//   });
// }

// let cssrenderer = new CSS3DRenderer();
// cssrenderer.setSize(window.innerWidth, window.innerHeight);
// document.querySelector("#css").appendChild(cssrenderer.domElement);
// createPage(4, 2, -2);
// cssscene = new THREE.Scene();
// createYoutubeVideo("byO-xihstdw", 4, 3, 5, 0);
// scene.add(new THREE.DirectionalLightHelper(dirLight));
//   const quarternion = new THREE.Quaternion().setFromAxisAngle(
//     new THREE.Vector3(settings.X, settings.Y, settings.Z).normalize(),
//     0.01
//   );
//   camera.position.applyQuaternion(quarternion);

// gui.open();
// }
