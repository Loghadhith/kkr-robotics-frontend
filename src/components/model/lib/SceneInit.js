// SceneInit.js
import * as THREE from 'three';

class SceneInit {
  constructor(canvasId) {
    this.canvasId = canvasId;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(canvasId), antialias: true });
  }

  initialize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);  // Transparent background
    this.camera.position.z = 5;
    this.camera.position.y = 5;
  }

  animate() {
    const animateScene = () => {
      requestAnimationFrame(animateScene);
      this.renderer.render(this.scene, this.camera);
    };
    animateScene();
  }
}

export default SceneInit;

