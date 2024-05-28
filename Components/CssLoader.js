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
