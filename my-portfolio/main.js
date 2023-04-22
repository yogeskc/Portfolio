import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { addStar, animate } from './utils';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renederer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renederer.setPixelRatio(window.devicePixelRatio);
renederer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renederer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 })
const torus = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renederer.domElement);

//background
// const spaceTexture = new THREE.TextureLoader().load('./resources/img/pic5.jpg');
// scene.background = spaceTexture;

//avatar
import { kc } from './avatar';
scene.add(kc);

// stars
Array(2000).fill().forEach(addStar(scene));

// helpers
import { lightHelper, gridHelper } from './helpers';
// scene.add(lightHelper, gridHelper);

function render() {
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  
  controls.update();

  renederer.render(scene, camera);
}

animate(render);
