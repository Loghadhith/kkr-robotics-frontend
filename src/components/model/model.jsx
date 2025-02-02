import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SceneInit from './lib/SceneInit';
import * as THREE from 'three';

const Model = () => {
  useEffect(() => {
    const sceneInit = new SceneInit('myThreeJsCanvas');
    sceneInit.initialize();

    // To hold the loaded model reference
    let loadedModel = null;

    // Load the model
    const modelPath = '/bumpy/bumpy.glb';
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(modelPath, (gltf) => {
      loadedModel = gltf.scene; // Assign the model to loadedModel

      // Initial positioning and scaling (preserved your adjustments)
      loadedModel.position.z = -10;
      loadedModel.position.x = 8;
      loadedModel.rotation.y = Math.PI / 2 ;
      loadedModel.position.y = -2;
      loadedModel.scale.set(5, 5, 5);

      // Ensure that the model uses its original materials
      loadedModel.traverse((child) => {
        if (child.isMesh) {
          // If you want to modify the material properties, you can do so like this:
          child.material.metalness = 0.5; // Example of tweaking metalness
          child.material.roughness = 0.7; // Example of tweaking roughness
        }
      });

      // Add the model to the scene
      sceneInit.scene.add(loadedModel);
    });

    // Add a light source to ensure visibility of the model
    const light = new THREE.DirectionalLight(0xffffff, 1); // White light
    light.position.set(10, 10, 10).normalize(); // Light position
    sceneInit.scene.add(light);

    // Optionally, add ambient light for softer lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Ambient light
    sceneInit.scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      if (loadedModel) {
        loadedModel.rotation.y += 0.01; // Rotate the model
      }
      sceneInit.renderer.render(sceneInit.scene, sceneInit.camera);
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation loop

  }, []);

  return (
    <div className="z-[2] relative w-full h-screen">
      <canvas id="myThreeJsCanvas" className="absolute w-full lg:w-[50%] top-10 right-0 bg-transparent" />
    </div>
  );
};

export default Model;

