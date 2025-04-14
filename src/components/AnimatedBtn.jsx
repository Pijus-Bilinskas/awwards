import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const AnimatedBtn = ({ title, containerClass }) => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(()=> {
        const button = buttonRef.current;
        const text = textRef.current;

        const handleMouseEnter = () => {
            gsap.to(text, {
              y: -10,
              opacity: 0,
              duration: 0.2,
              ease: 'power1.in',
              onComplete: () => {
                gsap.fromTo(
                  text,
                  { y: 10, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  }
                );
              },
            });
          
            gsap.to(button, {
             borderRadius: '12px', 
             padding: '8px 16px',  
              duration: 0.4,
              ease: 'power2.out',
            });
          };
          
          const handleMouseLeave = () => {
            gsap.to(button, {
                borderRadius: '9999px', 
                padding: '10px 20px',    
              duration: 0.4,
              ease: 'power2.out',
            });
          };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
        }
    }, [])

// need to fix the animation for the button

  return (
    <button ref={buttonRef}
     className={`relative overflow-hidden px-4 py-2 bg-black text-white flex rounded-full items-center gap-2 text-sm font-semibold ${containerClass}`}
     >
       <span
       ref={textRef}
       className='block'
       >
        {title}
       </span>
    </button>
  )
}

export default AnimatedBtn;