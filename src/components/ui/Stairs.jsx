

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Stairs = ({ children }) => {
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    // Reset the stairs and parent explicitly to initial state
    gsap.set(stairParentRef.current, { display: 'block' });
    gsap.set('.stair', { height: 0, y: 0 });
    gsap.set(pageRef.current, { opacity: 0 });

    // Create a new timeline
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(stairParentRef.current, { display: 'none' });
      },
    });

    // Stairs grow in height
    tl.fromTo('.stair', 
      { height: 0 }, 
      {
        height: '100%',
        stagger: { amount: 0.25 },
        duration: 0.5,
        ease: 'power2.out',
      }
    );

    // Stairs slide out
    tl.to('.stair', {
      y: '100%',
      stagger: { amount: 0.25 },
      duration: 0.6,
      ease: 'power2.inOut',
    });

    // Fade in page content, overlapping slightly
    tl.to(pageRef.current, {
      opacity: 1,
      duration: 0.5,
      
    }, '-=0.3'); // Overlap with the slide out

  }, [location.pathname]); // Re-run on pathname change

  return (
    <div>
      <div ref={stairParentRef} className="fixed z-20 h-screen w-full top-0 left-0" style={{ display: 'none' }}>
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef} style={{ opacity: 0 }}>{children}</div>
    </div>
  );
};

export default Stairs;