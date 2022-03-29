/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/

import React, {useRef, useEffect, useContext} from 'react';
import {
  whiteboardPaper,
} from '../components/WhiteboardConfigure';
import {StyleSheet, View, Text} from 'react-native';

interface WhiteboardCanvasInterface{
    showToolbox: boolean| undefined
  }
const WhiteboardCanvas:React.FC<WhiteboardCanvasInterface> = ({showToolbox}) => {
  const wbSurfaceRef = useRef();

  useEffect(function () {
    wbSurfaceRef.current.appendChild(whiteboardPaper);
    return () => {
      // unBindRoom();
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}
        ref={wbSurfaceRef}
        nativeID="whiteboard"
        key="whiteboard"
      />
    </>
  );
};

const style = StyleSheet.create({
  WhiteBoardContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    border: `2px solid ${$config.PRIMARY_COLOR}`,
    borderRadius: 10,
  },
  placeholder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000008',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolboxContainer: {
    position: 'absolute',
    paddingTop: 50,
    paddingLeft: 20,
  },
});

export default WhiteboardCanvas;
