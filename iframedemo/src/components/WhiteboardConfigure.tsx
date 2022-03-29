import React, {useState, useRef, useEffect} from 'react';
import {createContext} from 'react';
// import useMount from './useMount';

export const whiteboardPaper = document.createElement('iframe');
whiteboardPaper.className = 'whiteboardPaper';
//whiteboardPaper.src =
  'https://docs.google.com/forms/d/e/1FAIpQLSeycJnxmN5ckHJZM6-nlObEZPWNnMM5RrxJG7wEftYuXdvl5Q/viewform?embedded=true';
whiteboardPaper.src =
  'https://croquet.io/youtube?q=x';


export const whiteboardContext = createContext(
  {} as whiteboardContextInterface,
);

export interface whiteboardContextInterface {
  whiteboardActive: boolean;
  joinWhiteboardRoom: () => void;
  leaveWhiteboardRoom: () => void;
}

export interface WhiteboardPropsInterface {
  children: React.ReactNode;
}

const WhiteboardConfigure: React.FC<WhiteboardPropsInterface> = (props) => {
  // Defines intent, whether whiteboard should be active or not
  const [whiteboardActive, setWhiteboardActive] = useState(false);
  // Defines whiteboard room state, whether disconnected, Connected, Connecting etc.

  const _join = () => {};

  const _leave = () => {};

  const joinWhiteboardRoom = () => {
    setWhiteboardActive(true);
  };

  const leaveWhiteboardRoom = () => {
    setWhiteboardActive(false);
  };

  useEffect(() => {
    if (whiteboardActive) {
      _join();
    } else {
      _leave();
    }
  }, [whiteboardActive]);

  // useMount(() => {
  //   const appIdentifier = 'sQiiICtvEeyWGfeDVd9B7A/Kbv5q0_GAqx8Nw';
  //   whiteWebSdkClient.current = new WhiteWebSdk({
  //     appIdentifier: appIdentifier,
  //     region: 'cn-hz',
  //   });
  // });

  return (
    <whiteboardContext.Provider
      value={{
        whiteboardActive,
        joinWhiteboardRoom,
        leaveWhiteboardRoom,
      }}
    >
      {props.children}
    </whiteboardContext.Provider>
  );
};

export default WhiteboardConfigure;
