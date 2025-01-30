import { useEffect, useRef, useState } from 'react'
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';
import gsap from 'gsap';

const AboutSection2 = () => {
    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);
    const middleImageRef = useRef(null);

    useEffect(() => {
        gsap.set([leftImageRef.current, rightImageRef.current, middleImageRef.current], {
            opacity: 0,
        });
    }, []);



    const handleMouseMove = (e, ref) => {
        if(!ref.current) return

        const {left, top, width, height} = ref.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 15;
        const tiltY = (relativeX - 0.5) * -15;

        
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(4, 4, 4)`


        gsap.to(ref.current, {
            transform: newTransform,
            duration: 0.3,
            ease: "power1.out",
            opacity: 1,
            borderRadius: "15%",
        });
    };

    const handleMouseLeave = (ref) => {
        gsap.to(ref.current, {
            transform: "scale3d(0.5, 0.5, 0.5)",
            duration: 0.3,
            ease: "power1.out",
            opacity: 0,
            borderRadius: "0, 0, 0, 0",
        });
    };



  return (
    <section className='min-h-dvh w-screen bg-blue-50 text-black'>
        <div className='relative flex flex-col items-center py-20'>
            <p className='font-general text-sm uppercase md:text-[10px]'>who we are</p>
        
            <AnimatedTitle 
               containerClass="text-black my-5"
               title="We're building<br />a new reality<br />that rewards<br />players and <br />empowers<br />humans & AI<br />to thrive"
            />

            <p className='text-black font-circular-web text-sm'>Zentry envisions a future where players, emerging tech, and <br /> a new economy unite at the convergence of gaming and AI.</p>

            <Button title="discover who we are" containerClass=" mt-10 cursor-ponter" />
            
            <div ref={leftImageRef} className='absolute top-[22%] left-[43%]' onMouseMove={(e) => handleMouseMove(e, leftImageRef)} 
                onMouseLeave={() => handleMouseLeave(leftImageRef)}
                >
                <img src="/img/about-entry-1.webp" className='size-15 object-cover rounded-md' />
            </div>
            <div ref={rightImageRef} className='absolute top-[35%] right-[42%] bg-black' onMouseMove={(e) => handleMouseMove(e, rightImageRef)} 
                onMouseLeave={() => handleMouseLeave(rightImageRef)}>
                <img src="/img/about-entry-2.webp" className='size-15 object-cover rounded-md' />
            </div>
            <div ref={middleImageRef} className='absolute top-[53%] left-[47%] bg-black' onMouseMove={(e) => handleMouseMove(e, middleImageRef)} 
                onMouseLeave={() => handleMouseLeave(middleImageRef)}>
                <img src="/img/about-entry-3.webp" className='size-15 object-cover rounded-md' />
            </div>

        </div>
    </section>
  )
}

export default AboutSection2;