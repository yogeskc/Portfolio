import './css/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.15, 15, 15);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  star.position.set(
    (Math.random() - 0.5) * 100, // random x position between -50 and 50
    (Math.random() - 0.5) * 100, // random y position between -50 and 50
    (Math.random() - 0.5) * 100  // random z position between -50 and 50
  );

  scene.add(star);
}


Array(2000).fill().forEach(addStar);

const kcTexture = new THREE.TextureLoader().load('./resources/img/pic6.jpg');
const kc = new THREE.Mesh(
  new THREE.BoxGeometry(13, 13, 13),
  new THREE.MeshBasicMaterial({ map: kcTexture })
);
scene.add(kc);

function animate() {
  requestAnimationFrame(animate);

  // Rotate the scene
  scene.rotation.y += 0.002;

  controls.update();
  renderer.render(scene, camera);
}

animate();
