import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
export default class Controls {
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
