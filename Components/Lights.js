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
class SpotLight {
  constructor(scene) {
    this.spotLight = new THREE.SpotLight(0xffffff, 100);
    this.spotLight.position.set(-5, 8, 5);
    this.spotLight.angle = Math.PI / 6;
    this.spotLight.intensity = 180;
    this.spotLight.penumbra = 0.5;
    this.spotLight.decay = 1.99;
    this.spotLight.distance = 15;
    this.spotLight.castShadow = true;
    this.spotLight.shadow.camera.near = 1;
    this.spotLight.shadow.camera.far = 10;
    this.spotLight.shadow.focus = 1;
    scene.add(this.spotLight);
    // scene.add(new THREE.SpotLightHelper(this.spotLight));
  }
}
export { SpotLight, PointLight };
