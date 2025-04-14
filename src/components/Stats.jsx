import AnimatedTitle from './AnimatedTitle'

const Stats = () => {

//this is a work in progress, i gave up along the way, hard to find the assets needed

  return (
<div className='w-screen min-h-dvh bg-black py-25'>
    <div className='relative'>
        <div className='absolute flex flex-col'>
        <p className='text-violet-50 font-general text-sm  px-10 uppercase md:text-[10px]'>Our universe in a nutshell</p>
        <AnimatedTitle title="Zentry at a <br /> glance" containerClass="px-0 text-violet-50 pointer-events-none" />
        </div>
    </div>
    <div className='text-white flex flex-row justify-center gap-6 items-center'>
        <div className='flex flex-col'>
                <div className='flex flex-row border rounded-md'>
                    <div>
                        <p className='font-general text-3xl uppercase md:text-[10px]'>Products</p>
                        <h3 className='font-zentry text-3xl'>4+</h3>
                    </div>
                    <video
                    src='/videos/card-animate-1webm'
                    loop
                    autoPlay
                    muted
                    className='h-20 w-25 object-contain bg-white'
                    />
                </div>
        </div>
        <div className='flex flex-col'>
                <h2>sdasdsadsad</h2>
        </div>
    </div>

</div>
  )
}

export default Stats;