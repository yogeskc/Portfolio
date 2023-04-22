import * as THREE from 'three';

const kcTexture = new THREE.TextureLoader().load('./resources/img/pic6.jpg');
export const kc = new THREE.Mesh(
  new THREE.BoxGeometry(13, 13, 13),
  new THREE.MeshBasicMaterial({ map: kcTexture })
);
