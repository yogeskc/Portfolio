import './css/style.css';
import './css/canvas.css';
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
  const geometry = new THREE.SphereGeometry(0.35, 15, 15);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  star.position.set(
    (Math.random() - 0.5) * renderer.domElement.width, // random x position within canvas width
    (Math.random() - 0.5) * renderer.domElement.height, // random y position within canvas height
    -Math.random() * 1000  // random z position within a range (e.g. -1000 to 0)
  );

  scene.add(star);
}


Array(2000).fill().forEach(addStar);

const kcTexture = new THREE.TextureLoader().load('./resources/img/pic6.jpg');
const kc = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({ map: kcTexture })
);
scene.add(kc);

// const textures = [
//   './resources/img/pic1.jpg',
//   './resources/img/pic2.jpg',
//   './resources/img/pic3.jpg',
//   './resources/img/pic4.jpg',
//   './resources/img/pic6.jpg',
//   './resources/img/pic5.jpg',
  
// ];

// const materials = [];
// for (let i = 0; i < 6; i++) {
//   const texture = new THREE.TextureLoader().load(textures[i]);
//   const material = new THREE.MeshBasicMaterial({ map: texture });
//   materials.push(material);
// }

// const geometryy = new THREE.BoxGeometry(10, 10, 10);
// const cube = new THREE.Mesh(geometryy, materials);

// scene.add(cube);


function animate() {
  requestAnimationFrame(animate);

  // Rotate the scene
  scene.rotation.y += 0.002;

  controls.update();
  renderer.render(scene, camera);
}


const container = document.querySelector('#threeD');
const canvas = document.querySelector('.container-fluid')
container.addEventListener('click', function() {
  animate();
  container.style.display = 'none';
  container.style.position = 'relative';
  
  canvas.style.display='block';
  canvas.style.position = 'absolute';
});

    

