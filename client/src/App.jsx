import { useState } from 'react'
import './App.css'
import Navber from './components/Navber'
import HeroSection from './components/HeroSection'
import MidleSection from './components/MidleSection'
import ReviewSection from './components/ReviewSection'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-whites w-[100vw] overflow-x-hidden scroll-'>
      <Navber />
      <HeroSection />
      <MidleSection />
      <ReviewSection />
      <Footer />
    </div>
  )
}

export default App
