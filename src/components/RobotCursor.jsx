import { useEffect, useRef } from 'react';

const RobotCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="robot-cursor" ref={cursorRef}>
      <div className="robot-head">
        <div className="antenna"><div className="antenna-tip"></div></div>
        <div className="robot-eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>
      <div className="robot-body">
        <div className="chest-dot"></div>
      </div>
    </div>
  );
};

export default RobotCursor;
