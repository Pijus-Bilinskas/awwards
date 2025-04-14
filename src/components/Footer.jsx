import gsap from 'gsap';
import { useRef } from 'react'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'

    const links = [
        { href: 'https://discord.com', icon: <FaDiscord />, title: "Discord" },
        { href: 'https://twitter.com', icon: <FaTwitter />, title: "X" },
        { href: 'https://github.com/Pijus-Bilinskas', icon: <FaGithub />, title: "Github" },
        { href: 'https://twitch.com', icon: <FaTwitch />, title: "Twitch" },
    ]


const Footer = () => {
    const imageRef = useRef();

    const handleMouseLeave = () => {
        const image = imageRef.current;

        gsap.to(image, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.4,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
        const image = imageRef.current;
  if (!image) return;

  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 1; 
  const rotateY = ((x - centerX) / centerX) * -8;

  const scale = 1 + Math.abs((x - centerX) / centerX) * 0.02; 

  gsap.to(image, {
    duration: 0.4,
    rotateX,
    rotateY,
    scale,
    transformPerspective: 1000,
    transformOrigin: 'center',
    ease: 'power2.out',
  });

    }


  return (
    <footer className='w-screen bg-violet-300 py-5 text-black'>
        <img 
        ref={imageRef}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseLeave}
        onMouseEnter={handleMouseLeave}
        onMouseMove={handleMouseMove}
        src="/img/zentry-word-2.png"
         alt="zentry word" 
        className='w-[96%] mx-auto'
         />
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 my-12 px-10">
  {/* EXPLORE */}
  <div className="flex flex-col gap-2 text-left">
    <p className="text-xs font-circular-web uppercase">Explore</p>
    <div className="flex flex-col gap-1">
      {['Home', 'Prologue', 'About', 'Contact'].map((item) => (
        <button key={item} className="font-robert-medium text-2xl text-left hover:text-violet-300 hover:bg-black p-1.5 duration-300 rounded-2xl">
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* PRODUCTS */}
  <div className="flex flex-col gap-2 text-left">
    <p className="text-xs font-circular-web uppercase">Products</p>
    <div className="flex flex-col gap-1">
      <button className="font-robert-medium text-2xl text-left text-gray-500/75 cursor-not-allowed">Radiant</button>
      <button className="font-robert-medium text-2xl text-left hover:text-violet-300 hover:bg-black p-1.5 duration-300 rounded-2xl">Nexus</button>
      <button className="font-robert-medium text-2xl text-left text-gray-500/75 cursor-not-allowed">Zigma</button>
      <button className="font-robert-medium text-2xl text-left text-gray-500/75 cursor-not-allowed">Azul</button>
    </div>
  </div>

  {/* FOLLOW US */}
  <div className="flex flex-col gap-2 text-left">
    <p className="text-xs font-circular-web uppercase">Follow Us</p>
    <div className="flex flex-col gap-1">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-robert-medium text-2xl text-black hover:text-violet-300 hover:bg-black p-1.5 duration-300 rounded-2xl"
        >
          {link.icon}
          <span>{link.title}</span>
        </a>
      ))}
    </div>
  </div>

  {/* RESOURCES */}
  <div className="flex flex-col gap-2 text-left">
    <p className="text-xs font-circular-web uppercase">Resources</p>
    <button className="font-robert-medium text-2xl text-left hover:text-violet-300 hover:bg-black p-1.5 duration-300 rounded-2xl">Media Kit</button>
  </div>
</div>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>
               &copy; Nova 2024. All rights reserved 
            </p>


            <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
               Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer