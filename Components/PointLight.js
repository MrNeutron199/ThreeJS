import * as THREE from "three";
class PointLight extends THREE.PointLight {
  constructor(scene, x, y, z) {
    super();
    this.pointLight = new THREE.PointLight();
    this.pointLight.position.set(x, y, z);
    this.pointLight.intensity = 5;
    this.pointLight.castShadow = false;
    scene.add(this.pointLight);
    // scene.add(new THREE.PointLightHelper(this.pointLight));
  }
}
export default PointLight;
