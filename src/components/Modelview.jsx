import { View,PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import Iphone from './Iphone'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const Modelview = (index,gsapType,groupRef,controlRef,size,item,setRotationState) => {
  return (
    <View className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`} index = {index} id = {gsapType}>
      <ambientLight intensity = {0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]} />

      <Lights/>

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref = {groupRef} name = {`${index === 1}?'small':'large`} position={[0,0,0]}>
      <Suspense /*fallback = {<div>Loading</div>}*/>
        <Iphone
        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
        item={item}
        size={size}
        />
      </Suspense>
      </group>
    </View>
  )
}

export default Modelview
