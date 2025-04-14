import AnimatedBtn from "./AnimatedBtn";
import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";


const LatestUpdates = () => {
// need to implement a zoom on hover

    return (
        <div className="flex flex-col w-screen my-20 px-6 sm:flex-row sm:my-10 min-h-screen">
      <div
        className="flex flex-col justify-center items-center mb-12 sm:mb-auto mt-10 w-[90%] sm:items-start sm:w-[50%]"
      >
        <AnimatedTitle title="Latest updates" containerClass="text-black px-1 sm:mr-auto w-[90%] sm:w-[40%]" />
        <p className="sm:w-[40%] w-[90%] my-3 font-circular-web text-xl ">
          Stay updated with the latest news, events, and updates in our
          ecosystem. Be part of our universe's growth and evolution.
        </p>
        <AnimatedBtn title="Read all news ⏯" containerClass="font-zentry text-xl sm:text-xs text-white bg-black w-50" />
      </div>
      <div className="sm:w-[50%] w-[100%] mb-18">
        <div>
            <BentoTilt>
            <div className="relative overflow-visible">
          <img
            src="/img/gallery-2.webp"
            alt="gallery img"
            className="sm:max-w-[70%] max-w-[80%] rounded-2xl border-2"
          />
                </div>
            </BentoTilt>
          <div className="flex flex-row items-center my-5 gap-5 sm:w-[50%] w-[80%]">
            <p className="text-xs font-circular-web">09.05.2024</p>
            <p className="font-robert-medium sm:text-base text-xl">
              Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global
              Play Economy
            </p>
          </div>
        </div>
        <div>
            <BentoTilt>
          <img
            src="/img/gallery-3.webp"
            alt="gallery img"
            className="sm:max-w-[70%] max-w-[80%] rounded-2xl border-2"
          />
            </BentoTilt>
          <div className="flex flex-row items-center my-5 gap-5 sm:w-[50%] w-[80%]">
            <p className="text-xs font-circular-web">22.11.2024</p>
            <p className="font-robert-medium sm:text-base text-xl">Zentry Whitepaper: The Blueprint to the Metagame</p>
          </div>
        </div>
      </div>
    </div>
      )
}

export default LatestUpdates;