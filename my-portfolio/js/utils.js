import * as THREE from 'three';

export function addStar(scene) {
  return () => {
    const geometry = new THREE.SphereGeometry(0.15, 15, 15);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
  };
}

export function animate(render) {
  requestAnimationFrame(() => animate(render));
  render();
}
