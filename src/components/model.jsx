import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Modelview from "./Modelview";
import { useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { models, sizes } from "../constants";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";


const Models = () => {
  const [size, setsize] = useState("small");
  const [Model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
      delay: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 className="section-heading" id="heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] overflow-hidden relative md:h-[90vh]">
            <Modelview
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              item={Model}
              size={size}
              setRotationState={setSmallRotation}
            />

            <Modelview
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              item={Model}
              size={size}
              setRotationState={setLargeRotation}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port/>
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="font-light mb-5 text-center  text-sm">
              {Model.title}
            </p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    key={i}
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({label,value})=>(
                  <span key = {label} className="size-btn" style = {{backgroundColor:size === value?'white':'transparent',
                    color: size === value?'black':'white'
                  }} onClick={()=>setsize(value)}>
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
