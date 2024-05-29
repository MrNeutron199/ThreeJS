import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

let model, mixer;
class Loader {
  constructor() {
    this.loader = new GLTFLoader().setPath("/models/");
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath("/draco/");
    this.loader.setDRACOLoader(this.dracoLoader);
  }
  load(modelName, camera, scene, renderer, pos) {
    this.loader.load(
      modelName,
      async (gltf) => {
        const m = gltf.scene;
        await renderer.compileAsync(m, camera, scene);
        // m.position.set(-0.2, 1.3, -0.3);
        m.position.set(pos.x, pos.y, pos.z);
        m.scale.set(0.01, 0.01, 0.01);
        mixer = new THREE.AnimationMixer(m);
        mixer.clipAction(gltf.animations[0]).play();
        m.traverse(function (object) {
          if (object.isMesh) object.castShadow = true;
        });
        m.name = modelName;
        model = m;
        if (pos.rotation) m.rotation.y = pos.rotation;
        scene.add(m);
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );
  }
}
export { Loader, model, mixer };
