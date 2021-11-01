
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.z = 3
camera.position.x = - 1.2
scene.add(camera);

const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('https://bruno-simon.com/prismic/matcaps/8.png')

const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 22)
const material = new THREE.MeshMatcapMaterial({ matcap: texture })
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.y = Math.PI / 4
scene.add(mesh)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.append(renderer.domElement)

// window.setTimeout(() => {

//     renderer.render(scene, camera);
// }, 2000)

const tick = () => {
    window.requestAnimationFrame(tick)
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
}

tick()

// Mapcaps: https://bruno-simon.com/prismic/matcaps/9.png