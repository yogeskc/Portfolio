import * as THREE from 'three';

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
export const lightHelper = new THREE.PointLightHelper(pointLight);

export const gridHelper = new THREE.GridHelper(200, 5);
