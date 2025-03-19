import { useControls } from 'react-zoom-pan-pinch';

export const ZoomControls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="c-zoom__controls">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};
