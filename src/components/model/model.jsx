import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SceneInit from './lib/SceneInit';
import * as THREE from 'three';

const Model = () => {
  useEffect(() => {
    const sceneInit = new SceneInit('myThreeJsCanvas');
    sceneInit.initialize();

    let loadedModel = null;

    const modelPath = '/bumpy/bumpy.glb';
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(modelPath, (gltf) => {
      loadedModel = gltf.scene;

      loadedModel.position.z = -10;
      loadedModel.position.x = 8;
      loadedModel.rotation.y = Math.PI / 2;
      loadedModel.position.y = -2;
      loadedModel.scale.set(5, 5, 5);

      loadedModel.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0.5;
          child.material.roughness = 0.7;
        }
      });

      sceneInit.scene.add(loadedModel);
    });

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    sceneInit.scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(-10, 10, 10).normalize();
    sceneInit.scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    sceneInit.scene.add(ambientLight);

    const animate = () => {
      if (loadedModel) {
        loadedModel.rotation.y += 0.01;
      }
      sceneInit.renderer.render(sceneInit.scene, sceneInit.camera);
      requestAnimationFrame(animate);
    };

    animate();

  }, []);

  return (
    <div className="z-[2] relative w-full h-screen">
      <canvas id="myThreeJsCanvas" className="absolute w-full lg:w-[50%] top-10 right-0 bg-transparent" />
    </div>
  );
};

export default Model;

