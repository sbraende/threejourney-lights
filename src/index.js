import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const canvasEl = document.getElementById("canvas")

/*
* Canvas size 
*/
const size = {
    width: 1024,
    height: 1024
}

/*
* Scene
*/
const scene = new THREE.Scene()

/*
* Object
*/
const boxMesh = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial()
)
scene.add(boxMesh)

/*
* Camera
*/
const camera = new THREE.PerspectiveCamera(45, size.width/size.height, 0.01, 200)
camera.position.set(0, 0, 6)
scene.add(camera)

/*
* Renderer
*/
const renderer = new THREE.WebGLRenderer( { canvas: canvasEl, antialias: true } )
renderer.setSize(size.width, size.width)


/*
* Controller
*/
const controller = new OrbitControls(camera, canvasEl)
controller.enableDamping = true

/*
* Tick
*/
const tick = () => {
    controller.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()