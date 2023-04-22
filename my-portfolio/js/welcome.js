const fontLoader = new THREE.FontLoader();
fontLoader.load('https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json', function(font) {
  const messageGeometry = new THREE.TextGeometry('Welcome to my cool Three.js animation!', {
    font: font,
    size: 2,
    height: 0.5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 5
  });
  const messageMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const message = new THREE.Mesh(messageGeometry, messageMaterial);
  message.position.set(-50, 10, -100);
  message.rotation.set(Math.PI / 2, 0, 0);
  scene.add(message);
});

