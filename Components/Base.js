import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
class Scene {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.background = new THREE.Color(0x000000);
  }
}
class Controls {
  constructor(camera, dom) {
    this.controls = new OrbitControls(camera, dom);
    this.controls.enablePan = false;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.12;
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: null,
      RIGHT: THREE.MOUSE.ROTATE,
    };
    this.controls.maxPolarAngle = THREE.MathUtils.degToRad(70);
    this.controls.target.set(0, 0, 0);
    this.controls.maxDistance = 6.3;
    this.controls.minDistance = 6.5;
  }
}

export { Scene, Controls };
