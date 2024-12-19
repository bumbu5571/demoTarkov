import { useEffect, useLayoutEffect, useRef, useState } from "react"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/Addons.js";
import style from "./Model3D.module.css"

function Model3D() {
  const [pathModel, setPathModel] = useState<string>('./low-poly_mk-47_mutant.glb');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null)
  const object3DRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null);

  useLayoutEffect(() => {
      const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    });
 
    const camera = new THREE.PerspectiveCamera(
      45, 
      1920 / 1080, 
      0.1, 
      100
    )
    camera.position.set(1,0,0);
     
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const directionalLight = new THREE.DirectionalLight(0xF8F8FF, 0.9);
    directionalLight.castShadow = true;
    directionalLight.position.set(3, 1.5, -2);
    scene.add(directionalLight);

    const directionalLight1 = new THREE.DirectionalLight(0xF8F8FF, 0.9);
    directionalLight1.castShadow = true;
    directionalLight1.position.set(3, 1.5, -5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xF8F8FF, 0.9);
    directionalLight2.castShadow = true;
    directionalLight2.position.set(3, 1.5, 1);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xF8F8FF, 0.9);
    directionalLight3.castShadow = true;
    directionalLight3.position.set(-3, 1.5, 5);
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xF8F8FF, 0.9);
    directionalLight4.castShadow = true;
    directionalLight4.position.set(-3, 1.5, -1);
    scene.add(directionalLight4);

    const hemisphereLight = new THREE.HemisphereLight(0xF8F8FF,0xF8F8FF,1);
    scene.add(hemisphereLight);

    const ambientLight = new THREE.AmbientLight(0xF8F8FF, 0.9);
    scene.add(ambientLight);
 
    const loader = new GLTFLoader();
    loader.load(pathModel,
      (gltf) => {
        object3DRef.current = gltf.scene;
        gltf.scene.rotateY(.3)
        
        scene.add( gltf.scene );
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.log(error)
      }
    )
 
    renderer.setSize(
      divRef.current?.offsetWidth || window.innerWidth,
      divRef.current?.offsetHeight || window.innerHeight
    );
 
    renderer.setAnimationLoop(() => {
      if (object3DRef.current) object3DRef.current.rotateY(0.0015);
      renderer.render(scene, camera);
    });
 
    new OrbitControls(camera, renderer.domElement)

  },[]) 

  useEffect(()=> {
    if (!divRef.current) {
      return
    };
    
    const canvas = canvasRef.current as HTMLCanvasElement

    const resizeObserver = new ResizeObserver(() => {
      if (divRef.current?.offsetWidth !== canvasRef.current?.offsetWidth) {
        canvas.style.width = `${divRef.current?.offsetWidth}px` ;
      }
      if (divRef.current?.offsetHeight !== canvasRef.current?.offsetHeight) {
        canvas.style.height = `${divRef.current?.offsetHeight}px` ;
      }
    });
 
    resizeObserver.observe(divRef.current);

    return () => {
      resizeObserver.disconnect();
    }
  },[])

  const changeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLSelectElement;
    setPathModel(target.value)

    if (sceneRef.current) {
      const obj3D = object3DRef.current as THREE.Group<THREE.Object3DEventMap>;
      sceneRef.current.remove(obj3D)
    };

    const loader = new GLTFLoader();
    loader.load(target.value,
      (gltf) => {
        object3DRef.current =  gltf.scene;
        if (sceneRef.current) sceneRef.current.add( gltf.scene );
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.log(error)
      }
    )
  };

  return (
    <div className={style.wrapper} ref={divRef}>
      <select name="typeWeapon" onChange={changeHandler}>
        <option value='./low-poly_mk-47_mutant.glb'>MK-47</option>
        <option value='./low-poly_altyn_helmet.glb'>Altyn helmet</option>
        <option value='./low-poly_python_revolver.glb'>Revolver</option>
        <option value='./low-poly_remington_870_shotgun.glb'>Remington 870</option>
        <option value='./low-poly_zastava_m70ab2.glb'>Zastava M70AB</option>
      </select>
      <canvas className={style.model} ref={canvasRef} />
    </div> 
  )
}

export default Model3D