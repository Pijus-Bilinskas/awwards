import About from './components/About'
import AboutSection2 from './components/AboutSection2'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LatestUpdates from './components/LatestUpdates'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Story from './components/Story'

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <AboutSection2 />
      {/* <Stats /> */}
      <LatestUpdates />
      <Contact />
      <Footer />
    </main>
  )
}

export default App