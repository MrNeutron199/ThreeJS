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
